import React from "react";
import { Card } from "react-bootstrap";

class RankCard extends React.Component {
  render() {
    const height = this.props.height;
    const size = this.props.size;
    return (
      <Card
        style={{
          marginTop: 250 - height,
          background: "rgba(255, 255, 255, 0.3)"
        }}
      >
        <Card.Body
          style={{
            textAlign: "center"
          }}
        >
          <Card.Title style={{ fontSize: size, color: "white" }}>
            {this.props.place}
          </Card.Title>
          <hr style={{ backgroundColor: "black" }}></hr>
          <div>
            <Card.Text style={{ fontSize: 4 + "vw" }}>
              {this.props.name}
            </Card.Text>
          </div>
          <hr style={{ backgroundColor: "black" }}></hr>
          <Card.Text style={{ fontSize: 22 }}>
            {this.props.elo} - {this.props.winLoss}%
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default RankCard;
