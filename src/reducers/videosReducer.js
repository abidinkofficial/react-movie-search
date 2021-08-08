import * as actions from '../actions/videosActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  videos: {},
}

export default function videosReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_VIDEOS:
      return { ...state, loading: true }
    case actions.GET_VIDEOS_SUCCESS:
      return { videos: action.payload, loading: false, hasErrors: false }
    case actions.GET_VIDEOS_FAIL:
      return { ...state, loading: false, hasErrors: true }
    case actions.CLEAR_VIDEOS:
      return { videos: {}, loading: false, hasErrors: false }
    default:
      return state
  }
}
