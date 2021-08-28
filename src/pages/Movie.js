import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchMovie } from "../actions/movieActions"
import { fetchSimilarMovies } from "../actions/similarMoviesActions"
import { fetchKeywords } from "../actions/keywordsActions"
import { useParams } from "react-router"
import Header from "../components/Header"
import Card from "../components/Card"
import Cast from "../components/Cast"
import Video from "../components/Video"
import moment from "moment"
import { StarIcon } from "@heroicons/react/solid"

const Movie = (
  {
    dispatch,
    movie,
    movieLoading,
    movieFail,
    similarMovies,
    similarMoviesLoading,
    similarMoviesFail,
    keywords,
    ...props
  }) => {
  const id = useParams().id

  const [similarCards, setSimilarCards] = useState([])
  const [customLoading, setCustomLoading] = useState(false)
  const [posterUrl, setPosterUrl] = useState(null)

  useEffect(() => {
    dispatch(fetchMovie(id))
    dispatch(fetchSimilarMovies(id))
    dispatch(fetchKeywords(id))
  }, [dispatch, id])

  useEffect(() => {
    setSimilarCards([])
    similarMovies?.results?.slice(0, 5).map((result) => setSimilarCards((similarCards) => [...similarCards, <Card movie={result} key={result.id} similar={true} />]))
  }, [similarMovies])

  useEffect(() => {
    (movieLoading || similarMoviesLoading) ? setCustomLoading(true) : setTimeout(() => setCustomLoading(false), 500)
  }, [movieLoading, similarMoviesLoading])

  useEffect(() => {
    movie.poster_path ? setPosterUrl(`https://image.tmdb.org/t/p/w300${movie.poster_path}`) : setPosterUrl(`${process.env.PUBLIC_URL}/poster-fallback-w300.png`)
  }, [movie])

  return (
    <>
      {movie &&
        <>
          <Header context="movie" movie={movie} />
          <main>
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-5 pt-10">
              {
                customLoading ?
                  <>
                    <div className="mx-auto flex flex-col md:flex-row animate-pulsefast">
                      <div className="rounded-md w-64 h-96 md:mr-5 bg-gray-300"></div>
                      <div>
                        <div className="rounded-md w-60 h-12 md:mr-5 bg-gray-300 mb-3"></div>
                        <div className="rounded-md w-96 h-8 md:mr-5 bg-gray-300 mb-3"></div>
                        <div className="rounded-md w-72 h-5 md:mr-5 bg-gray-300 mb-3"></div>
                        <div className="rounded-md w-64 h-5 md:mr-5 bg-gray-300 mb-3"></div>
                        <div className="rounded-md w-60 h-5 md:mr-5 bg-gray-300 mb-3"></div>
                        <div className="rounded-md w-56 h-5 md:mr-5 bg-gray-300 mb-3"></div>
                      </div>
                    </div>
                  </> :
                  <>
                    <div style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="rounded-md overflow-hidden mb-5">
                      <div className="mx-auto flex flex-col lg:flex-row animate-loading-fade bg-gray-900 bg-opacity-75 p-5 backdrop-filter backdrop-blur">
                        <div className="min-w-max h-full my-auto mb-5 lg:mb-auto">
                          <img src={posterUrl} alt="movie poster" className="rounded-md overflow-hidden min-w-min h-full mr-5" />
                        </div>
                        <div className="h-full">
                          <h2 className="text-5xl font-semibold text-gray-50 mb-5">
                            <div className="inline-block bg-gray-900 bg-opacity-50 p-2 rounded-md">{movie.title}</div>
                          </h2>
                          <div className="flex flex-col sm:flex-row">
                            <div className="flex items-center text-sm font-semibold bg-gray-900 bg-opacity-50 rounded-md w-full sm:max-w-max mr-2 mb-5">
                              <StarIcon className="h-5 w-5 text-yellow-400 ml-2" />
                              <span className="bg-gray-50 text-gray-900 p-1 rounded-md ml-auto sm:ml-2">{parseFloat(movie.vote_average).toFixed(1)}</span>
                            </div>
                            <div className="flex items-center text-sm font-semibold bg-gray-900 bg-opacity-50 rounded-md w-full sm:max-w-max mr-2 mb-5">
                              <span className="py-1 pl-2 rounded-md text-gray-50">Status</span>
                              <span className="bg-gray-50 text-gray-900 p-1 rounded-md ml-auto sm:ml-2">{movie.status}</span>
                            </div>
                            <div className="flex items-center text-sm font-semibold bg-gray-900 bg-opacity-50 rounded-md w-full sm:max-w-max mr-2 mb-5">
                              <span className="py-1 pl-2 rounded-md text-gray-50">Release date</span>
                              <span className="bg-gray-50 text-gray-900 p-1 rounded-md ml-auto sm:ml-2">{moment(movie?.release_date).format("MMMM D, YYYY")}</span>
                            </div>
                          </div>
                          <div className="bg-gray-900 bg-opacity-50 p-2 rounded-md mb-5">
                            <h3 className="font-semibold text-2xl mb-2 text-gray-200">{movie.tagline}</h3>
                            <p className="text-gray-200">{movie.overview}</p>
                          </div>
                          <div className="bg-gray-900 bg-opacity-50 rounded-md flex flex-wrap max-w-max mb-5">
                            <h4 className="text-sm my-2 mx-1">Keywords:</h4>
                            {keywords?.keywords ?
                              keywords?.keywords.slice(0, 5).map(keyword => <div key={keyword.id} className="flex items-center text-sm bg-gray-900 bg-opacity-50 text-gray-200 border border-gray-700 rounded-md my-2 mx-1 px-2">{keyword.name}</div>) :
                              <div className="flex items-center text-sm bg-gray-900 bg-opacity-50 text-gray-200 border border-gray-700 rounded-md my-2 mx-1 px-2">Not available.</div>}
                          </div>
                          <Cast id={id} />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-col bg-gradient-to-b from-gray-100 to-gray-50 p-5 rounded-md mb-5">
                        <div className="text-xl text-gray-50 mb-5">
                          <span className="bg-indigo-900 py-1 px-2 rounded-md">Watch trailer</span>
                        </div>
                        <Video id={id} />
                      </div>
                      <div className="flex flex-col bg-gradient-to-b from-gray-100 to-gray-50 py-5 px-3 sm:px-5 rounded-md mb-5">
                        <div className="text-xl text-gray-50 mb-5">
                          <span className="bg-indigo-900 py-1 px-2 rounded-md">Similar movies</span>
                        </div>
                        <div className="ml-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 max-w-max mx-auto">
                          {similarCards}
                        </div>
                      </div>
                    </div>
                  </>
              }
            </div>
          </main>
        </>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  movieLoading: state.movie.loading,
  movie: state.movie.movie,
  movieFail: state.movie.hasErrors,

  similarMoviesLoading: state.similarMovies.loading,
  similarMovies: state.similarMovies.similarMovies,
  similarMoviesFail: state.similarMovies.hasErrors,

  keywords: state.keywords.keywords,
})

export default connect(mapStateToProps)(Movie);