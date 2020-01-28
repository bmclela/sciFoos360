import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";

import LargeBoxDisplay from "./helperComponents/LargeBoxDisplay";

const Champions = props => {
  const displayBestPlayer = () => {
    if (props.players[0]) {
      const playerList = props.players
        .filter(player => player.wins || player.losses)
        .sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          return nameA < nameB ? 1 : -1;
        })
        .sort((player1, player2) => (player1.elo < player2.elo ? 1 : -1));
      const player = playerList[0];
      if (player) {
        let winLoss = 0;
        if (player.losses === 0) {
          winLoss = 100;
        } else {
          winLoss = Math.round(
            (player.wins / (player.losses + player.wins)) * 100
          );
        }
        return (
          <LargeBoxDisplay
            title={"#1 Player"}
            name={player.name}
            elo={Math.round(player.elo)}
            winLoss={winLoss}
          />
        );
      } else return;
    } else return;
  };

  const displayBestTeam = () => {
    if (props.teams[0]) {
      const teamList = props.teams
        .filter(team => team.wins || team.losses)
        .sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          return nameA < nameB ? 1 : -1;
        })
        .sort((team1, team2) => (team1.elo < team2.elo ? 1 : -1));
      const team = teamList[0];
      if (team) {
        let winLoss = 0;
        if (team.losses === 0) {
          winLoss = 100;
        } else {
          winLoss = Math.round((team.wins / (team.losses + team.wins)) * 100);
        }
        return (
          <LargeBoxDisplay
            type={"#1 Team"}
            name={team.name}
            elo={Math.round(team.elo)}
            winLoss={winLoss}
          />
        );
      } else return;
    } else return;
  };

  return (
    <div>
      <div id="champions" style={{ height: 80 }}>
        <h1 style={{ textAlign: "center", color: "white" }}>
          Current Champions
        </h1>
      </div>

      <Row>
        <Col sm={12} md={6}>
          {displayBestPlayer()}
        </Col>
        <Col sm={12} md={6}>
          {displayBestTeam()}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ players, teams }) => {
  return { players, teams };
};

export default connect(mapStateToProps)(Champions);
