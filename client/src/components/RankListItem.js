import React from "react";
import { ListGroup } from "react-bootstrap";

class RankListItem extends React.Component {
  render() {
    return (
      <div>
        <ListGroup.Item
          style={{
            backgroundColor: "black",
            color: "white",
            marginBottom: 10,
            background: "rgba(255, 255, 255, 0.3)"
          }}
        >
          <div
            id="rank"
            style={{
              display: "inline-block",
              textAlign: "center"
            }}
          >
            {this.props.rankNumber}
          </div>
          <div
            id="opponent"
            style={{
              display: "inline-block",
              textAlign: "center"
            }}
          >
            {this.props.name}
          </div>
          <div
            id="elo"
            style={{
              display: "inline-block",
              textAlign: "center"
            }}
          >
            {this.props.elo}
          </div>
          <div
            id="winRate"
            style={{
              display: "inline-block",
              textAlign: "center"
            }}
          >
            {this.props.winPercent}%
          </div>
          <div
            id="winLoss"
            style={{
              display: "inline-block",
              textAlign: "center"
            }}
          >
            {this.props.winLoss}
          </div>
        </ListGroup.Item>
      </div>
    );
  }
}

export default RankListItem;
