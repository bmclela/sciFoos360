import { FETCH_HALLOFFAMETEAMS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_HALLOFFAMETEAMS:
      return action.payload.reverse();
    default:
      return state;
  }
}
