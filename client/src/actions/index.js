import axios from 'axios';
import { FETCH_GAMES } from './types';

export const fetchGames = () => async dispatch => {
  const res = await axios.get('/api/games');
  dispatch({ type: FETCH_GAMES, payload: res.data });
};

export const addGame = values => async dispatch => {
  const res = await axios.post('/api/games', values);
  dispatch({ type: FETCH_GAMES, payload: res.data });
};
