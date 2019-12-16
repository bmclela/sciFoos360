import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import RecentGameItem from './RecentGameItem';

const RecentGames = props => {
  const displayGames = props.games.map(game => {
    return (
      <RecentGameItem
        key={game._id}
        winner1={game.winner1}
        winner2={game.winner2}
        loser1={game.loser1}
        loser2={game.loser2}
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
