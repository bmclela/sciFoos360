import React from 'react';
import { connect } from 'react-redux';

import RankListItem from '../components/RankListItem';
import { ListGroup } from 'react-bootstrap';

const Players = props => {
  const playerList = props.players
    .filter(player => player.wins || player.losses)
    .sort((player1, player2) => (player1.elo < player2.elo ? 1 : -1));

  const displayPlayers = playerList.map((player, index) => {
    let winLoss = 0;
    if (player.losses === 0) {
      winLoss = 100;
    } else {
      winLoss = Math.round((player.wins / (player.losses + player.wins)) * 100);
    }
    return (
      <RankListItem
        key={player._id}
        rankNumber={index + 1}
        name={player.name}
        elo={Math.round(player.elo)}
        winLoss={winLoss}
      />
    );
  });

  return (
    <div
      style={{
        marginRight: 100,
        marginLeft: 100,
        marginTop: 50,
        marginBottom: 100
      }}
    >
      <div style={{ height: 100 }}>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Player Rankings</h1>
      </div>
      <ListGroup>{displayPlayers}</ListGroup>
    </div>
  );
};

const mapStateToProps = state => {
  return { players: state.players };
};

export default connect(mapStateToProps)(Players);
