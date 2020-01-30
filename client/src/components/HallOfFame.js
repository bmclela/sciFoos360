import React from 'react';
import { connect } from 'react-redux';
import HallOfFameMonth from './HallOfFameMonth';

const HallOfFame = props => {
  const displayHallOfFame = props.players.map((player, index) => {
    if (props.teams[0]) {
      console.log(props.teams[0].losses);
      //if (props.teams[0].losses) {
      console.log(props.teams[0]);
      const date = new Date(player.date);
      const year = date.getFullYear();
      const monthNumber = date.getMonth();
      let month;
      switch (monthNumber) {
        case 0:
          month = 'January';
          break;
        case 1:
          month = 'February';
          break;
        case 2:
          month = 'March';
          break;
        case 3:
          month = 'April';
          break;
        case 4:
          month = 'May';
          break;
        case 5:
          month = 'June';
          break;
        case 6:
          month = 'July';
          break;
        case 7:
          month = 'August';
          break;
        case 8:
          month = 'September';
          break;
        case 9:
          month = 'October';
          break;
        case 10:
          month = 'November';
          break;
        case 11:
          month = 'December';
          break;
        default:
          console.log('Error');
      }
      let playerWinPercent = 0;
      if (player.losses === 0) {
        playerWinPercent = 100;
      } else {
        playerWinPercent = Math.round(
          (player.wins / (player.losses + player.wins)) * 100
        );
      }
      let teamWinPercent = 0;
      if (props.teams[index].losses === 0) {
        teamWinPercent = 100;
      } else {
        teamWinPercent = Math.round(
          (props.teams[index].wins /
            (props.teams[index].losses + props.teams[index].wins)) *
            100
        );
      }
      return (
        <HallOfFameMonth
          key={index}
          month={month + ' ' + year}
          playerTitle='#1 Player'
          playerName={player.name}
          playerPercent={playerWinPercent}
          playerElo={player.elo}
          teamTitle='#1 Team'
          teamName={props.teams[index].name}
          teamPercent={teamWinPercent}
          teamElo={props.teams[index].elo}
        />
      );
      //  } else return;
    } else return;
  });

  return (
    <div style={{ margin: 40, marginBottom: 20 }}>
      <div id='champions' style={{ height: 80 }}>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Hall of Fame</h1>
      </div>

      {displayHallOfFame}
      {/* <Row>
        <Col sm={12} md={6}>
          <LargeBoxDisplay
            title={"props.players[0].name"}
            name="This is my name"
            // name={props.players[1].name}
            percent="C"
            elo="D"
          ></LargeBoxDisplay>
        </Col>
        <Col sm={12} md={6}>
          <LargeBoxDisplay
            title="Best Team - January 2020"
            name="B"
            percent="C"
            elo="D"
          ></LargeBoxDisplay>
        </Col>
      </Row> */}
    </div>
  );

  // // const listMonths = () => {
  // //   return ()
  // // }

  // return (
  //   <div>
  //     <LargeBoxDisplay title="TEST" />
  //   </div>
  // );
};

const mapStateToProps = ({ hallOfFamePlayers, hallOfFameTeams }) => {
  return { players: hallOfFamePlayers, teams: hallOfFameTeams };
};

export default connect(mapStateToProps)(HallOfFame);
