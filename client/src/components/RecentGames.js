import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import RecentGameItem from './RecentGameItem';

const RecentGames = props => {
  const displayGames = props.games.map(game => {
    const player1 = game.winner1 < game.winner2 ? game.winner1 : game.winner2;
    const player2 = player1 === game.winner1 ? game.winner2 : game.winner1;
    const player3 = game.loser1 < game.loser2 ? game.loser1 : game.loser2;
    const player4 = player3 === game.loser1 ? game.loser2 : game.loser1;
    return (
      <RecentGameItem
        key={game._id}
        id={game._id}
        date={game.date}
        winner1={player1}
        winner2={player2}
        loser1={player3}
        loser2={player4}
      />
    );
  });

  return (
    <div>
      <div
        style={{
          height: 80,
          paddingTop: 15
        }}
      >
        <h3
          style={{
            textAlign: 'center',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}
        >
          Recent Games
        </h3>
      </div>
      <ListGroup>{displayGames}</ListGroup>
    </div>
  );
};

const mapStateToProps = state => {
  return { games: state.games };
};

export default connect(mapStateToProps)(RecentGames);
