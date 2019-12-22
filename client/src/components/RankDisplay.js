import React from 'react';

import RankListItem from '../components/RankListItem';

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
      let winLoss = 0;
      if (opponent.losses === 0) {
        winLoss = 100;
      } else {
        winLoss = Math.round(
          (opponent.wins / (opponent.losses + opponent.wins)) * 100
        );
      }
      return (
        <RankListItem
          key={opponent._id}
          rankNumber={index + 1}
          name={opponent.name}
          elo={Math.round(opponent.elo)}
          winLoss={winLoss}
        />
      );
    });

  return (
    <div
      style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 50,
        marginBottom: 100,
        width: '80%'
      }}
    >
      <div style={{ height: 100 }}>
        <h1 style={{ textAlign: 'center', color: 'white' }}>
          {props.title} Rankings
        </h1>
      </div>
      <div
        style={{
          color: 'white',
          marginBottom: 10,
          fontWeight: 'bold',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem'
        }}
      >
        <div
          style={{
            display: 'inline-block',
            textAlign: 'center',
            width: 25 + '%'
          }}
        >
          Rank
        </div>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'center',
            width: 25 + '%'
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'center',
            width: 25 + '%'
          }}
        >
          Elo
        </div>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'center',
            width: 25 + '%'
          }}
        >
          Win Rate
        </div>
      </div>
      {displayOpponents}
    </div>
  );
};

export default Opponents;
