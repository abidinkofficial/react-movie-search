import * as actions from '../actions/searchActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  results: [],
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actions.MAKE_SEARCH:
      return { ...state, loading: true }
    case actions.MAKE_SEARCH_SUCCESS:
      return { results: action.payload, loading: false, hasErrors: false }
    case actions.MAKE_SEARCH_FAIL:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
