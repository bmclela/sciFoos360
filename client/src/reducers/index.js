import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import teamsReducer from './teamsReducer';
import playersReducer from './playersReducer';
import hallOfFamePlayersReducer from './hallOfFamePlayersReducer';
import hallOfFameTeamsReducer from './hallOfFameTeamsReducer';

export default combineReducers({
  games: gamesReducer,
  teams: teamsReducer,
  players: playersReducer,
  hallOfFamePlayers: hallOfFamePlayersReducer,
  hallOfFameTeams: hallOfFameTeamsReducer,
});
