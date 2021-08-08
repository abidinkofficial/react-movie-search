export const GET_CREDITS = "GET_CREDITS"
export const GET_CREDITS_SUCCESS = "GET_CREDITS_SUCCESS"
export const GET_CREDITS_FAIL = "GET_CREDITS_FAIL"
export const CLEAR_CREDITS = "CLEAR_CREDITS"

const API_KEY = process.env.REACT_APP_API_KEY

export const getCredits = () => ({ type: GET_CREDITS })
export const getCreditsSuccess = (credits) => ({
  type: GET_CREDITS_SUCCESS,
  payload: credits
})
export const getCreditsFail = () => ({ type: GET_CREDITS_FAIL })
export const clearCredits = () => ({ type: CLEAR_CREDITS })
export function fetchCredits(id) {
  return async (dispatch) => {
    dispatch(getCredits());

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
      const data = await response.json()

      dispatch(getCreditsSuccess(data))
    } catch (error) {
      dispatch(getCreditsFail())
    }
  }
}