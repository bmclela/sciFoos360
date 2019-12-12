import { FETCH_GAMES } from "../actions/types";
import { ADD_GAME } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_GAMES:
      return action.payload;
    case ADD_GAME:
      return [...state, action.payload];
    default:
      return [];
  }
}
