export const GET_KEYWORDS = "GET_KEYWORDS"
export const GET_KEYWORDS_SUCCESS = "GET_KEYWORDS_SUCCESS"
export const GET_KEYWORDS_FAIL = "GET_KEYWORDS_FAIL"
export const CLEAR_KEYWORDS = "CLEAR_KEYWORDS"

const API_KEY = process.env.REACT_APP_API_KEY

export const getKeywords = () => ({ type: GET_KEYWORDS })
export const getKeywordsSuccess = (keywords) => ({
  type: GET_KEYWORDS_SUCCESS,
  payload: keywords
})
export const getKeywordsFail = () => ({ type: GET_KEYWORDS_FAIL })
export const clearKeywords = () => ({ type: CLEAR_KEYWORDS })
export function fetchKeywords(id) {
  return async (dispatch) => {
    dispatch(getKeywords());

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${API_KEY}`)
      const data = await response.json()

      dispatch(getKeywordsSuccess(data))
    } catch (error) {
      dispatch(getKeywordsFail())
    }
  }
}