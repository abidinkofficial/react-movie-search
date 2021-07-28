import * as actions from '../actions/movieActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  movie: {},
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MOVIE:
      return { ...state, loading: true }
    case actions.GET_MOVIE_SUCCESS:
      return { movie: action.payload, loading: false, hasErrors: false }
    case actions.GET_MOVIE_FAIL:
      return { ...state, loading: false, hasErrors: true }
    case actions.CLEAR_MOVIE:
      return { movie: {}, loading: false, hasErrors: false }
    default:
      return state
  }
}
