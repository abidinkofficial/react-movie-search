import { combineReducers } from "redux"

import trendingsReducer from "./trendingsReducer"

const reducer = combineReducers({
  trendings: trendingsReducer
})

export default reducer