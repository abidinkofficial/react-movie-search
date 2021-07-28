import { combineReducers } from "redux"

import trendingsReducer from "./trendingsReducer"
import searchReducer from "./searchReducer"
import movieReducer from "./movieReducer"
import similarMoviesReducer from "./similarMoviesReducer"

const reducer = combineReducers({
  trendings: trendingsReducer,
  searchReducer: searchReducer,
  movie: movieReducer,
  similarMovies: similarMoviesReducer
})

export default reducer