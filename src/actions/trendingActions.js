export const GET_TRENDINGS = "GET_TRENDINGS"
export const GET_TRENDINGS_SUCCESS = "GET_TRENDINGS_SUCCESS"
export const GET_TRENDINGS_FAIL = "GET_TRENDINGS_FAIL"

const API_KEY = process.env.REACT_APP_API_KEY

export const getTrendings = () => ({ type: GET_TRENDINGS })

export const getTrendingsSuccess = (trendings) => ({
  type: GET_TRENDINGS_SUCCESS,
  payload: trendings
})

export const getTrendingsFail = () => ({ type: GET_TRENDINGS_FAIL })

export function fetchTrendings() {
  return async (dispatch) => {
    dispatch(getTrendings());

    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      const data = await response.json()

      dispatch(getTrendingsSuccess(data))
    } catch (error) {
      dispatch(getTrendingsFail())
    }
  }
}