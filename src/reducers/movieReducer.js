import * as actions from "../actions/movieActions"

export const initialState = {
  loading: true,
  hasErrors: false,
  movies: []
}

export default function movieReducer (state = initialState, action) {
  switch (action.type) {
    case actions.GET_MOVIES:
      return { ...state, loading: true }
    default:
      return state
  }
}