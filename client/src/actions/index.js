import axios from "axios";
import { FETCH_GAMES, ADD_GAME, UPDATE_TEAMS, FETCH_TEAMS } from "./types";

export const fetchGames = () => async dispatch => {
  const res = await axios.get("/api/games");
  dispatch({ type: FETCH_GAMES, payload: res.data });
};

export const addGame = values => async dispatch => {
  const res = await axios.post("/api/games", values);
  dispatch({ type: ADD_GAME, payload: res.data.newGame });
  dispatch({ type: UPDATE_TEAMS, payload: res.data.newTeams });
};

export const fetchTeams = () => async dispatch => {
  const res = await axios.get("/api/teams");
  dispatch({ type: FETCH_TEAMS, payload: res.data });
};
