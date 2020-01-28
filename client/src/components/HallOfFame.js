import React from "react";
import { Row, Col } from "react-bootstrap";
import ChampionCard from "./ChampionCard";
import { connect } from "react-redux";
import LargeBoxDisplay from "./helperComponents/LargeBoxDisplay";

const HallOfFame = props => {
  // const listMonths = () => {
  //   return ()
  // }

  return (
    <div>
      <LargeBoxDisplay />
    </div>
  );
};

const mapStateToProps = ({ players, teams }) => {
  return { players, teams };
};

export default connect(mapStateToProps)(HallOfFame);
