export const GET_SIMILAR_MOVIES = "GET_SIMILAR_MOVIES"
export const GET_SIMILAR_MOVIES_SUCCESS = "GET_SIMILAR_MOVIES_SUCCESS"
export const GET_SIMILAR_MOVIES_FAIL = "GET_SIMILAR_MOVIES_FAIL"
export const CLEAR_SIMILAR_MOVIES = "CLEAR_SIMILAR_MOVIES"

const API_KEY = process.env.REACT_APP_API_KEY

export const getSimilarMovies = () => ({ type: GET_SIMILAR_MOVIES })

export const getSimilarMoviesSuccess = (similarMovies) => ({
  type: GET_SIMILAR_MOVIES_SUCCESS,
  payload: similarMovies
})

export const getSimilarMoviesFail = () => ({ type: GET_SIMILAR_MOVIES_FAIL })

export const clearSimilarMovies = () => ({ type: CLEAR_SIMILAR_MOVIES })

export function fetchSimilarMovies(id) {
  return async (dispatch) => {
    dispatch(getSimilarMovies());

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`)
      const data = await response.json()

      dispatch(getSimilarMoviesSuccess(data))
    } catch (error) {
      dispatch(getSimilarMoviesFail())
    }
  }
}