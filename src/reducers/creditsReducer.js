import * as actions from '../actions/creditsActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  credits: {},
}

export default function creditsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CREDITS:
      return { ...state, loading: true }
    case actions.GET_CREDITS_SUCCESS:
      return { credits: action.payload, loading: false, hasErrors: false }
    case actions.GET_CREDITS_FAIL:
      return { ...state, loading: false, hasErrors: true }
    case actions.CLEAR_CREDITS:
      return { credits: {}, loading: false, hasErrors: false }
    default:
      return state
  }
}
