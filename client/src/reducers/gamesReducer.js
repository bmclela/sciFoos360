import { FETCH_GAMES, ADD_GAME } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_GAMES:
      return action.payload.reverse();
    case ADD_GAME:
      return [action.payload, ...state];
    default:
      return state;
  }
}
