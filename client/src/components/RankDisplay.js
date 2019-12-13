import React from "react";
import RankCard from "./RankCard";
import { Row, Col } from "react-bootstrap";

import "../style/style.css";

class RankDisplay extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: 30 }}>
        <Row>
          <Col xs={{ order: 2, span: 12 }} md={{ order: 1 }}>
            <div className="second">
              <RankCard
                style={{ marginBottom: 40 }}
                name={"this.props.item2.name"}
                elo={"this.props.item2.elo"}
                winLoss={"this.props.item2.wins / this.props.item2.losses"}
                namesize={this.props.namesize}
                place={2}
                size={50}
                height={250}
              />
            </div>
          </Col>
          <Col xs={{ order: 1, span: 12 }} md={{ order: 2 }}>
            <div id="first">
              <RankCard
                name={this.props.name1}
                elo={this.props.elo1}
                winLoss={this.props.winLoss1}
                namesize={this.props.namesize}
                place={1}
                size={71}
                height={275}
              />
            </div>
          </Col>
          <Col xs={{ order: 3, span: 12 }} md={{ order: 3 }}>
            <div id="third">
              <RankCard
                name={this.props.name3}
                elo={this.props.elo3}
                winLoss={this.props.winLoss3}
                namesize={this.props.namesize}
                place={3}
                size={30}
                height={225}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RankDisplay;
