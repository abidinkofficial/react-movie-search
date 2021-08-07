import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchMovie } from "../actions/movieActions"
import { fetchSimilarMovies } from "../actions/similarMoviesActions"
import { useParams } from "react-router"
import Header from "../components/Header"
import Card from "../components/Card"

const Movie = ({ dispatch, movie, movieLoading, movieFail, similarMovies, similarMoviesLoading, similarMoviesFail, ...props }) => {
  const id = useParams().id

  const [similarCards, setSimilarCards] = useState([])
  const [customLoading, setCustomLoading] = useState(false)

  useEffect(() => {
    dispatch(fetchMovie(id))
    dispatch(fetchSimilarMovies(id))
  }, [dispatch, id])

  useEffect(() => {
    setSimilarCards([])
    similarMovies?.results?.slice(0, 5).map((result) => setSimilarCards((similarCards) => [...similarCards, <Card movie={result} key={result.id} />]))
  }, [similarMovies])

  useEffect(() => {
    (movieLoading || similarMoviesLoading) ? setCustomLoading(true) : setTimeout(() => setCustomLoading(false), 500)
  }, [movieLoading, similarMoviesLoading])

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
                    <div style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                      <div className="mx-auto flex flex-col md:flex-row animate-loading-fade bg-gray-800 bg-opacity-75">
                        <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`} alt="movie poster" className="rounded-md overflow-hidden md:mr-5 min-w-min max-w-max" />
                        <div>
                          <h2 className="text-2xl font-semibold text-gray-50 mb-3">{movie.title}</h2>
                          <div className="text-sm font-semibold mb-3 text-gray-200">Status: {movie.status}, Release date: {movie.release_date}</div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-200">{movie.tagline}</h3>
                          <p className="text-gray-200">{movie.overview}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex my-5 animate-loading-fade">
                      <h2 className="text-2xl font-semibold mr-5">Similar movies:</h2>
                    </div>
                    <div className="flex flex-wrap justify-center animate-loading-fade">
                      {similarCards}
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
  similarMoviesFail: state.similarMovies.hasErrors
})

export default connect(mapStateToProps)(Movie);