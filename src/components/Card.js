import { StarIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"

const Card = ({ movie }) => {
  let history = useHistory()

  const [posterUrl, setPosterUrl] = useState(null)

  useEffect(() => {
    movie.poster_path ? setPosterUrl(`https://image.tmdb.org/t/p/w300${movie.poster_path}`) : setPosterUrl(`${process.env.PUBLIC_URL}/poster-fallback-w300.png`)
  }, [movie])

  return (
    <div onClick={() => history.push(`/movie/${movie.id}`)} className="group animate-loading-fade w-52 h-96 flex flex-col bg-gray-100 hover:bg-gray-200 rounded-md my-5 mx-auto p-3 transition-colors cursor-pointer shadow-md">
      <div className="relative transform group-hover:scale-x-103 group-hover:scale-y-102 transition-all">
        <div className="absolute z-10 right-3 top-3 backdrop-filter bg-gray-800 bg-opacity-25 backdrop-blur-2xl rounded-md flex items-center origin-bottom-left"><StarIcon className="h-5 w-5 m-1 text-yellow-400" /><span className="m-1 text-gray-50">{parseFloat(movie.vote_average).toFixed(1)}</span></div>
        <img src={posterUrl} alt="movie poster" className="rounded-md overflow-hidden" />
      </div>
      <div className="h-full mt-3 flex flex-col justify-between">
        <div>
          <h2 className="group-hover:text-gray-900 transition-colors">{movie.title}</h2>
        </div>
        <div>
          <h3 className="text-xs">Released on {movie.release_date}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card;