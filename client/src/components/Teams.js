import React from 'react';
import { connect } from 'react-redux';

import RankDisplay from './RankDisplay';

const Teams = props => {
  return <RankDisplay opponent={props.teams} title='Team' />;
};

const mapStateToProps = state => {
  return { teams: state.teams };
};

export default connect(mapStateToProps)(Teams);
