import * as actions from '../actions/trendingActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  trendings: [],
}

export default function trendingsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TRENDINGS:
      return { ...state, loading: true }
    case actions.GET_TRENDINGS_SUCCESS:
      return { trendings: action.payload, loading: false, hasErrors: false }
    case actions.GET_TRENDINGS_FAIL:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
