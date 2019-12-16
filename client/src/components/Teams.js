import React from 'react';
import { connect } from 'react-redux';

import RankListItem from '../components/RankListItem';
import { ListGroup } from 'react-bootstrap';

const Teams = props => {
  const teamList = props.teams.sort((team1, team2) =>
    team1.elo < team2.elo ? 1 : -1
  );

  const displayTeams = teamList.map((team, index) => {
    let winLoss = 0;
    if (team.losses === 0) {
      winLoss = 100;
    } else {
      winLoss = Math.round((team.wins / (team.losses + team.wins)) * 100);
    }
    return (
      <RankListItem
        key={team._id}
        rankNumber={index + 1}
        name={team.name}
        elo={Math.round(team.elo)}
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
        <h1 style={{ textAlign: 'center', color: 'white' }}>Team Rankings</h1>
      </div>
      <ListGroup>{displayTeams}</ListGroup>
    </div>
  );
};

const mapStateToProps = state => {
  return { teams: state.teams };
};

export default connect(mapStateToProps)(Teams);
