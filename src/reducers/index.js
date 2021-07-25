import { combineReducers } from "redux"

import trendingsReducer from "./trendingsReducer"
import searchReducer from "./searchReducer"

const reducer = combineReducers({
  trendings: trendingsReducer,
  searchReducer: searchReducer
})

export default reducer