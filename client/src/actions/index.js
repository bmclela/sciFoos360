import axios from 'axios';
import {
  FETCH_GAMES,
  ADD_GAME,
  UPDATE_TEAMS,
  FETCH_TEAMS,
  ADD_PLAYER,
  FETCH_PLAYERS,
  DELETE_GAME,
  UPDATE_PLAYERS
} from './types';

export const fetchGames = () => async dispatch => {
  const res = await axios.get('/api/games');
  dispatch({ type: FETCH_GAMES, payload: res.data });
};

export const addGame = values => async dispatch => {
  const res = await axios.post('/api/games', values);
  dispatch({ type: ADD_GAME, payload: res.data.newGame });
  dispatch({ type: UPDATE_TEAMS, payload: res.data.newTeams });
  dispatch({ type: UPDATE_PLAYERS, payload: res.data.newPlayers });
};

export const deleteGame = ({ gameId }) => async dispatch => {
  const res = await axios.delete(`/api/games/${gameId}`);
  dispatch({ type: DELETE_GAME, payload: res.data.games });
  dispatch({ type: UPDATE_TEAMS, payload: res.data.newTeams });
  dispatch({ type: UPDATE_PLAYERS, payload: res.data.newPlayers });
};

export const fetchTeams = () => async dispatch => {
  const res = await axios.get('/api/teams');
  dispatch({ type: FETCH_TEAMS, payload: res.data });
};

export const addPlayer = values => async dispatch => {
  const res = await axios.post('/api/players', values);
  dispatch({ type: ADD_PLAYER, payload: res.data });
};

export const fetchPlayers = () => async dispatch => {
  const res = await axios.get('/api/players');
  dispatch({ type: FETCH_PLAYERS, payload: res.data });
};
