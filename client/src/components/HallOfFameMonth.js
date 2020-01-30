import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LargeBoxDisplay from './helperComponents/LargeBoxDisplay';

const HallOfFameMonth = props => {
  return (
    <div>
      <h4 style={{ textAlign: 'center', marginBottom: 20, marginTop: 30 }}>
        {props.month}
      </h4>
      <Row>
        <Col sm={12} md={6}>
          <LargeBoxDisplay
            title={props.playerTitle}
            name={props.playerName}
            percent={props.playerPercent}
            elo={Math.round(props.playerElo)}
          ></LargeBoxDisplay>
        </Col>
        <Col sm={12} md={6}>
          <LargeBoxDisplay
            title={props.teamTitle}
            name={props.teamName}
            percent={props.teamPercent}
            elo={Math.round(props.teamElo)}
          ></LargeBoxDisplay>
        </Col>
      </Row>
    </div>
  );
};

export default HallOfFameMonth;
