import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import * as actions from "./actions";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Players from "./components/Players";
import Teams from "./components/Teams";
import HallOfFame from "./components/HallOfFame";
import "./style/style.css";

const App = props => {
  useEffect(() => {
    props.fetchGames();
    props.fetchTeams();
    props.fetchPlayers();
    props.fetchHallOfFameTeams();
    props.fetchHallOfFamePlayers();
  });

  return (
    <div>
      <div id="hero-overlay"></div>
      <BrowserRouter>
        <Navigation />
        <div
          style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Route path="/" exact component={Home} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/players" exact component={Players} />
          <Route path="/hall-of-fame" exact component={HallOfFame} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
