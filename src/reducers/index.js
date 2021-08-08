import { combineReducers } from "redux"

import trendingsReducer from "./trendingsReducer"
import searchReducer from "./searchReducer"
import movieReducer from "./movieReducer"
import similarMoviesReducer from "./similarMoviesReducer"
import videosReducer from "./videosReducer"
import keywordsReducer from "./keywordsReducer"
import creditsReducer from "./creditsReducer"

const reducer = combineReducers({
  trendings: trendingsReducer,
  searchReducer: searchReducer,
  movie: movieReducer,
  similarMovies: similarMoviesReducer,
  videos: videosReducer,
  keywords: keywordsReducer,
  credits: creditsReducer
})

export default reducer