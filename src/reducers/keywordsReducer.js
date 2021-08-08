import * as actions from '../actions/keywordsActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  keywords: {},
}

export default function keywordsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_KEYWORDS:
      return { ...state, loading: true }
    case actions.GET_KEYWORDS_SUCCESS:
      return { keywords: action.payload, loading: false, hasErrors: false }
    case actions.GET_KEYWORDS_FAIL:
      return { ...state, loading: false, hasErrors: true }
    case actions.CLEAR_KEYWORDS:
      return { keywords: {}, loading: false, hasErrors: false }
    default:
      return state
  }
}
