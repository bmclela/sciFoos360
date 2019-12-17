import { ADD_PLAYER, FETCH_PLAYERS, UPDATE_PLAYERS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.payload];
    case FETCH_PLAYERS:
      return action.payload;
    case UPDATE_PLAYERS:
      return action.payload;
    default:
      return state;
  }
}
