import React from "react";

const HallOfFameMonth = props => {
  return (
    <div style={{ margin: 40 }}>
      <div id="champions" style={{ height: 80 }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Hall of Fame</h1>
      </div>

      <Row>
        <Col sm={12} md={6}>
          <ChampionCard
            type="Best Player - January 2020"
            name="This is my name"
            // name={props.players[1].name}
            winLoss="C"
            elo="D"
          ></ChampionCard>
        </Col>
        <Col sm={12} md={6}>
          <ChampionCard
            type="Best Team - January 2020"
            name="B"
            winLoss="C"
            elo="D"
          ></ChampionCard>
        </Col>
      </Row>
    </div>
  );
};
