import React from 'react';
import { Col, Row } from 'react-bootstrap';

import ChampionCard from './ChampionCard';

class Champions extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: 80 }}>
          <h1 style={{ textAlign: 'center', color: 'white' }}>
            December Champions
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
  }
}

export default Champions;
