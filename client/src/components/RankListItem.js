import React from 'react';
import { ListGroup } from 'react-bootstrap';

class RankListItem extends React.Component {
  render() {
    return (
      <ListGroup.Item
        style={{
          backgroundColor: 'black',
          color: 'white',
          marginBottom: 10,
          background: "rgba(255, 255, 255, 0.3)"
        }}
      >
        <div
          style={{
            display: 'inline-block',
            textAlign: 'center',
            width: 25 + '%'
          }}
        >
          {this.props.rankNumber}
        </div>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'center',
            width: 25 + '%'
          }}
        >
          {this.props.name}
        </div>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'center',
            width: 25 + '%'
          }}
        >
          {this.props.elo}
        </div>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'center',
            width: 25 + '%'
          }}
        >
          {this.props.winLoss}%
        </div>
      </ListGroup.Item>
    );
  }
}

export default RankListItem;
