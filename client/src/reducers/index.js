import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import teamsReducer from "./teamsReducer";

export default combineReducers({
  games: gamesReducer,
  teams: teamsReducer
});
