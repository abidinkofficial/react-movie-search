export const MAKE_SEARCH = "MAKE_SEARCH"
export const MAKE_SEARCH_SUCCESS = "MAKE_SEARCH_SUCCESS"
export const MAKE_SEARCH_FAIL = "MAKE_SEARCH_FAIL"

const API_KEY = process.env.REACT_APP_API_KEY

export const makeSearch = () => ({ type: MAKE_SEARCH })

export const makeSearchSuccess = (results) => ({
  type: MAKE_SEARCH_SUCCESS,
  payload: results
})

export const makeSearchFail = () => ({ type: MAKE_SEARCH_FAIL })

export function search(query, page) {
  return async (dispatch) => {
    dispatch(makeSearch());

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&page=${page}`)
      const data = await response.json()

      dispatch(makeSearchSuccess(data))
    } catch (error) {
      dispatch(makeSearchFail())
    }
  }
}