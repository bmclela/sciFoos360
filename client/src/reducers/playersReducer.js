import { ADD_PLAYER, GET_PLAYERS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.payload];
    case GET_PLAYERS:
      return action.payload;
    default:
      return state;
  }
}
