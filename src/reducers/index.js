import { combineReducers } from "redux"

import movieReducer from "./movieReducer"

const reducer = combineReducers({
  movies: movieReducer
})

export default reducer