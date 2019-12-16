import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import ChampionCard from './ChampionCard';

const Champions = props => {
  // const [bestPlayer, setBestPlayer] = useState('');
  // const [bestTeam, setBestTeam] = useState('');

  // useEffect(() => {
  //   console.log(props.players[0]);
  //   if (props.players) {
  //     setBestPlayer({ bestPlayer: props.players.name });
  //   }
  //   if (props.teams) {
  //     setBestTeam({ bestTeam: props.teams.name });
  //   }
  // }, [props.players, props.teams]);

  return (
    <div>
      <div style={{ height: 80 }}>
        <h1 style={{ textAlign: 'center', color: 'white' }}>
          Current Champions
        </h1>
      </div>

      <Row>
        <Col sm={12} md={6}>
          <ChampionCard
            type={'Best Player'}
            name={'Player1'}
            elo={1275}
            winLoss={83}
          />
        </Col>
        <Col sm={12} md={6}>
          <ChampionCard
            type={'Best Team'}
            name={'Player1 and Player2'}
            elo={1231}
            winLoss={62}
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return { players: state.players };
};

export default connect(mapStateToProps)(Champions);
