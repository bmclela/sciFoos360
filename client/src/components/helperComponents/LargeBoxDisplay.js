import React from "react";
import { Card } from "react-bootstrap";

const LargeBoxDisplay = props => {
  return (
    <Card id="background" style={{ textAlign: "center", marginBottom: 20 }}>
      <Card.Body>
        <Card.Title style={{ fontSize: 18 }}>{"title"}</Card.Title>
        <hr style={{ backgroundColor: "black" }}></hr>
        <Card.Text style={{ fontSize: 30 }}>{"name"}</Card.Text>
        <hr style={{ backgroundColor: "black" }}></hr>
        <Card.Text style={{ fontSize: 18 }}>
          {"elo"} - {"percent"}%
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LargeBoxDisplay;
