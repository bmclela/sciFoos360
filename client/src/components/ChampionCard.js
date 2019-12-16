import React from 'react';
import { Card } from 'react-bootstrap';

class ChampionCard extends React.Component {
  render() {
    return (
      <Card id='background' style={{ textAlign: 'center', marginBottom: 20 }}>
        <Card.Body>
          <Card.Title style={{ fontSize: 18 }}>{this.props.type}</Card.Title>
          <hr style={{ backgroundColor: 'black' }}></hr>
          <Card.Text style={{ fontSize: 30 }}>{this.props.name}</Card.Text>
          <hr style={{ backgroundColor: 'black' }}></hr>
          <Card.Text style={{ fontSize: 18 }}>
            {this.props.elo} - {this.props.winLoss}%
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ChampionCard;
