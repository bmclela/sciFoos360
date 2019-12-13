import { UPDATE_TEAMS, FETCH_TEAMS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_TEAMS:
      return action.payload;
    case FETCH_TEAMS:
      return action.payload;
    default:
      return state;
  }
}
