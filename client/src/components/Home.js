import React from 'react';
import { Col, Row } from 'react-bootstrap';

import RecentGames from '../components/RecentGames';
import Champions from '../components/Champions';

class Home extends React.Component {
  render() {
    return (
      <div style={{ margin: 40, color: 'white' }}>
        <Row>
          <Col lg={9}>
            <Champions />
          </Col>
          <Col lg={3}>
            <RecentGames />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
