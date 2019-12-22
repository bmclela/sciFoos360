import React from 'react';
import { connect } from 'react-redux';

import RankDisplay from './RankDisplay';

const Players = props => {
  return <RankDisplay opponent={props.players} title='Player' />;
};

const mapStateToProps = state => {
  return { players: state.players };
};

export default connect(mapStateToProps)(Players);
