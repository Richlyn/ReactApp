import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
//import cardsReducer from "./cardsReducer";

const rootReducer = combineReducers({
  citiesObj: cityReducer,
  itinerariesObj: itineraryReducer,
  activitiesObj: activityReducer
});
export default rootReducer;
