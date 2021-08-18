import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchCredits } from "../actions/creditsActions"

const Cast = ({ dispatch, credits, creditsLoading, creditsFail, id }) => {

  useEffect(() => {
    dispatch(fetchCredits(id))
  }, [id, dispatch])

  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-semibold mb-2">Lead actors:</h3>
      <div className="flex flex-wrap">
        {
          credits?.cast?.length > 0 ? credits?.cast?.slice(0, 5).map(cast =>
            <div className="bg-gray-900 bg-opacity-50 pb-2 w-24 rounded-md flex flex-col items-center mr-1">
              <div className="w-20 h-20 flex items-center justify-center">
                <div className="rounded-full overflow-hidden w-16 h-16" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${cast.profile_path}), url(${process.env.PUBLIC_URL}/actor-placeholder.png)`, backgroundSize: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
              </div>
              <h4 className="text-xs text-gray-200 text-center">{cast.name}</h4>
            </div>
          ) :
            <div className="flex items-center text-sm bg-gray-900 bg-opacity-50 text-gray-200 border border-gray-700 rounded-md px-2">There is no cast info available.</div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  creditsLoading: state.credits.loading,
  credits: state.credits.credits,
  creditsFail: state.credits.hasErrors,
})

export default connect(mapStateToProps)(Cast)