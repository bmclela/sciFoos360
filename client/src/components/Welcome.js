import React from 'react';
import { Card } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Card id='background' style={{ textAlign: 'center' }}>
      <Card.Body>
        <Card.Text style={{ fontSize: 36 }}>Welcome to SCI Foos360!</Card.Text>
        <Card.Text style={{ fontSize: 18 }}>
          Add players and games to start tracking rankings.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Welcome;
