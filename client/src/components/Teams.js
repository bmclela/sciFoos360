import React, { useEffect } from "react";
import { connect } from "react-redux";

import RankDisplay from "../components/RankDisplay";
import RankList from "../components/RankList";

const Teams = props => {
  useEffect = () => {
    const teamList = props.teams.sort((team1, team2) =>
      team1.elo < team2.elo ? 1 : -1
    );
  };

  console.log(teamList);

  return (
    <div
      style={{
        marginRight: 100,
        marginLeft: 100,
        marginTop: 50,
        marginBottom: 100
      }}
    >
      <RankDisplay
        item1={teamList[0]}
        item2={teamList[1]}
        item3={teamList[2]}
        name1={"Player1 Player2"}
        name2={"Player3 Player 4"}
        name3={"Player5 Player 6"}
        elo1={1127}
        elo2={1095}
        elo3={1008}
        winLoss1={80}
        winLoss2={75}
        winLoss3={72}
        namesize={20}
      />
      <RankList />
    </div>
  );
};

const mapStateToProps = state => {
  return { teams: state.teams };
};

export default connect(mapStateToProps)(Teams);
