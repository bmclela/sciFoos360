import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import teamsReducer from './teamsReducer';
import playersReducer from './playersReducer';

export default combineReducers({
  games: gamesReducer,
  teams: teamsReducer,
  players: playersReducer
});
