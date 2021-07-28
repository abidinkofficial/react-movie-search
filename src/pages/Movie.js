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

  useEffect(() => {
    dispatch(fetchMovie(id))
    dispatch(fetchSimilarMovies(id))
  }, [dispatch, id])

  useEffect(() => {
    setSimilarCards([])
    similarMovies?.results?.slice(0,5).map((result) => setSimilarCards((similarCards) => [...similarCards, <Card movie={result} key={result.id} />]))
  }, [similarMovies])

  return (
    <>
      {movie &&
        <>
          <Header context="movie" movie={movie} />
          <main>
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-5 pt-10">
              <div className="mx-auto flex flex-col md:flex-row">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie poster" className="rounded-md overflow-hidden md:mr-5 min-w-min max-w-max" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{movie.title}</h2>
                  <h3 className="text-xl font-semibold mb-3">{movie.tagline}</h3>
                  <p>{movie.overview}</p>
                </div>
              </div>
              <div className="flex my-5">
                <h2 className="text-2xl font-semibold mr-5">Similar movies:</h2>
              </div>
              <div className="flex flex-wrap justify-center">
                {similarCards}
              </div>
            </div>
          </main>
        </>}
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