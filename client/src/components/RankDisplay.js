import React from "react";

import RankListItem from "../components/RankListItem";

const Opponents = props => {
  const displayOpponents = props.opponent
    .filter(opponent => opponent.wins || opponent.losses)
    .sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      return nameA < nameB ? 1 : -1;
    })
    .sort((opponent1, opponent2) => (opponent1.elo < opponent2.elo ? 1 : -1))
    .map((opponent, index) => {
      let winPercent = 0;
      if (opponent.losses === 0) {
        winPercent = 100;
      } else {
        winPercent = Math.round(
          (opponent.wins / (opponent.losses + opponent.wins)) * 100
        );
      }
      return (
        <RankListItem
          key={opponent._id}
          rankNumber={index + 1}
          name={opponent.name}
          elo={Math.round(opponent.elo)}
          winPercent={winPercent}
          winLoss={opponent.wins + " / " + opponent.losses}
        />
      );
    });

  return (
    <div
      style={{
        marginRight: "40px",
        marginLeft: "40px",
        marginTop: 50,
        marginBottom: 100
      }}
    >
      <div style={{ height: 100 }}>
        <h1 style={{ textAlign: "center", color: "white" }}>
          {props.title} Rankings
        </h1>
      </div>
      <div
        style={{
          color: "white",
          marginBottom: 10,
          fontWeight: "bold",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem"
        }}
      >
        <div
          id="rank"
          style={{
            display: "inline-block",
            textAlign: "center"
          }}
        >
          Rank
        </div>
        <div
          id="opponent"
          style={{
            display: "inline-block",
            textAlign: "center"
          }}
        >
          {props.title}
        </div>
        <div
          id="elo"
          style={{
            display: "inline-block",
            textAlign: "center"
          }}
        >
          Elo
        </div>
        <div
          id="winRate"
          style={{
            display: "inline-block",
            textAlign: "center"
          }}
        >
          Win Rate
        </div>
        <div
          id="winLoss"
          style={{
            display: "inline-block",
            textAlign: "center"
          }}
        >
          Win / Loss
        </div>
      </div>
      {displayOpponents}
    </div>
  );
};

export default Opponents;
