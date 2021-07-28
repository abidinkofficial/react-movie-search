import * as actions from '../actions/similarMoviesActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  similarMovies: [],
}

export default function similarMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_SIMILAR_MOVIES:
      return { ...state, loading: true }
    case actions.GET_SIMILAR_MOVIES_SUCCESS:
      return { similarMovies: action.payload, loading: false, hasErrors: false }
    case actions.GET_SIMILAR_MOVIES_FAIL:
      return { ...state, loading: false, hasErrors: true }
    case actions.CLEAR_SIMILAR_MOVIES:
      return { similarMovies: [], loading: false, hasErrors: false }
    default:
      return state
  }
}
