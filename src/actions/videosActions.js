export const GET_VIDEOS = "GET_VIDEOS"
export const GET_VIDEOS_SUCCESS = "GET_VIDEOS_SUCCESS"
export const GET_VIDEOS_FAIL = "GET_VIDEOS_FAIL"
export const CLEAR_VIDEOS = "CLEAR_VIDEOS"

const API_KEY = process.env.REACT_APP_API_KEY

export const getVideos = () => ({ type: GET_VIDEOS })
export const getVideosSuccess = (videos) => ({
  type: GET_VIDEOS_SUCCESS,
  payload: videos
})
export const getVideosFail = () => ({ type: GET_VIDEOS_FAIL })
export const clearVideos = () => ({ type: CLEAR_VIDEOS })
export function fetchVideos(id) {
  return async (dispatch) => {
    dispatch(getVideos());

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      const data = await response.json()

      dispatch(getVideosSuccess(data))
    } catch (error) {
      dispatch(getVideosFail())
    }
  }
}