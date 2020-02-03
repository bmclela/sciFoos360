import { FETCH_GAMES, ADD_GAME, DELETE_GAME } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_GAMES:
      console.log(action.payload);
      return action.payload.reverse();
    case ADD_GAME:
      return [action.payload, ...state];
    case DELETE_GAME:
      return action.payload.reverse();
    default:
      return state;
  }
}
