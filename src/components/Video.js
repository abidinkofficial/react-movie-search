import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchVideos } from "../actions/videosActions"

const Video = ({ dispatch, videos, videosLoading, videosFail, id }) => {
  const [videoPath, setVideoPath] = useState(null)

  useEffect(() => {
    dispatch(fetchVideos(id))
  }, [id, dispatch])

  useEffect(() => {
    const found = videos?.results?.find(video => video.type === "Trailer")
    found && setVideoPath(found.key)
  }, [videos])

  return (
    <div>
      {
        videoPath ?
        <iframe className="rounded-md overflow-hidden" allowFullScreen title="ytplayer" id="ytplayer" type="text/html" width="640" height="360"
          src={`http://www.youtube.com/embed/${videoPath}?autoplay=0&origin=http://example.com`}
          frameBorder="0" /> :
          <div className="flex items-center text-sm bg-gray-700 text-gray-200 border border-gray-700 rounded-md px-2 max-w-max">
            Trailer is not available.
          </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  videosLoading: state.videos.loading,
  videos: state.videos.videos,
  videosFail: state.videos.hasErrors,
})

export default connect(mapStateToProps)(Video)