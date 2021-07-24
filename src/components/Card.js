import { StarIcon } from "@heroicons/react/solid"

const Card = ({ movie }) => {
  return (
    <div className="group w-52 h-96 flex flex-col bg-gray-100 hover:bg-gray-200 rounded-md my-5 mx-2 p-3 transition-colors cursor-pointer shadow-md">
      <div className="relative transform group-hover:scale-x-103 group-hover:scale-y-102 transition-all">
        <div className="absolute z-10 right-3 top-3 bg-gray-50 rounded-md flex items-center origin-bottom-left"><StarIcon className="h-5 w-5 m-1 text-yellow-400" /><span className="m-1">{parseFloat(movie.vote_average).toFixed(1)}</span></div>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie poster" className="rounded-md overflow-hidden" />
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