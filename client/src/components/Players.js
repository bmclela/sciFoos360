import React from 'react';

import RankDisplay from '../components/RankDisplay';
import RankList from '../components/RankList';

class Players extends React.Component {
  render() {
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
          name1={'Player1'}
          name2={'Player2'}
          name3={'Player3'}
          elo1={1127}
          elo2={1095}
          elo3={1008}
          winLoss1={80}
          winLoss2={75}
          winLoss3={72}
          namesize={30}
        />
        <RankList />
      </div>
    );
  }
}

export default Players;
