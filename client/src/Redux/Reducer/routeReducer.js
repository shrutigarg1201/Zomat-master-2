import { combineReducers } from "redux";

import restaurants from "./restaurant/restaurant.reducer";

const rootReducer = combineReducers({restaurants});

export default rootReducer;