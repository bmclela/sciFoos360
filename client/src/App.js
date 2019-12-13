import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import * as actions from "./actions";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Players from "./components/Players";
import Teams from "./components/Teams";
import Tournament from "./components/Tournament";
import "./style/style.css";

const App = props => {
  useEffect(() => {
    props.fetchGames();
    props.fetchTeams();
  });

  return (
    <div>
      <div id="hero-overlay"></div>
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/players" exact component={Players} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/tournament" exact component={Tournament} />
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
