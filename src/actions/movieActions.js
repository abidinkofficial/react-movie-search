export const GET_MOVIE = "GET_MOVIE"
export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS"
export const GET_MOVIE_FAIL = "GET_MOVIE_FAIL"
export const CLEAR_MOVIE = "CLEAR_MOVIE"

const API_KEY = process.env.REACT_APP_API_KEY

export const getMovie = () => ({ type: GET_MOVIE })

export const getMovieSuccess = (movie) => ({
  type: GET_MOVIE_SUCCESS,
  payload: movie
})

export const getMovieFail = () => ({ type: GET_MOVIE_FAIL })

export const clearMovie = () => ({ type: CLEAR_MOVIE })

export function fetchMovie(id) {
  return async (dispatch) => {
    dispatch(getMovie());

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      const data = await response.json()

      dispatch(getMovieSuccess(data))
    } catch (error) {
      dispatch(getMovieFail())
    }
  }
}