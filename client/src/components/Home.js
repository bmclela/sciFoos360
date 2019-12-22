import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import RecentGames from '../components/RecentGames';
import Champions from '../components/Champions';
import Welcome from '../components/Welcome';

const Home = props => {
  const [loaded, setLoaded] = useState('loading');

  useEffect(() => {
    if (props.games[0]) {
      setLoaded('loaded');
    } else setLoaded('noData');
  }, [props.games]);

  const displayHome = () => {
    if (loaded === 'loaded') {
      return (
        <Row>
          <Col lg={9}>
            <Champions />
          </Col>
          <Col lg={3}>
            <RecentGames />
          </Col>
        </Row>
      );
    } else if (loaded === 'loading') {
      return;
    } else {
      return <Welcome />;
    }
  };

  return <div style={{ margin: 40, color: 'white' }}>{displayHome()}</div>;
};

const mapStateToProps = ({ games }) => {
  return { games };
};

export default connect(mapStateToProps)(Home);
