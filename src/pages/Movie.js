import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchMovie } from "../actions/movieActions"
import { useParams } from "react-router"

const Movie = ({ dispatch, movie, movieLoading, movieFail, ...props }) => {
  const id = useParams().id

  useEffect(() => {
    dispatch(fetchMovie(id))
  }, [dispatch, id])

  return (
    <div>
      {movie?.original_title}
    </div>
  )
}

const mapStateToProps = (state) => ({
  movieLoading: state.movie.movieLoading,
  movie: state.movie.movie,
  movieFail: state.movie.movieFail
})

export default connect(mapStateToProps)(Movie);