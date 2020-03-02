import { FETCH_HALLOFFAMEPLAYERS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_HALLOFFAMEPLAYERS:
      return action.payload.reverse();
    default:
      return state;
  }
}
