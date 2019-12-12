import React from 'react';
import { ListGroup } from 'react-bootstrap';

import RankListItem from '../components/RankListItem';

class RankList extends React.Component {
  render() {
    return (
      <div>
        <ListGroup>
          <RankListItem
            rankNumber={4}
            name={'Player4'}
            elo={1002}
            winLoss={68}
          />
          <RankListItem
            rankNumber={4}
            name={'Player4'}
            elo={1002}
            winLoss={68}
          />
          <RankListItem
            rankNumber={4}
            name={'Player4'}
            elo={1002}
            winLoss={68}
          />
          <RankListItem
            rankNumber={4}
            name={'Player4'}
            elo={1002}
            winLoss={68}
          />
          <RankListItem
            rankNumber={4}
            name={'Player4'}
            elo={1002}
            winLoss={68}
          />
          <RankListItem
            rankNumber={4}
            name={'Player4'}
            elo={1002}
            winLoss={68}
          />
          <RankListItem
            rankNumber={4}
            name={'Player4'}
            elo={1002}
            winLoss={68}
          />
        </ListGroup>
      </div>
    );
  }
}

export default RankList;
