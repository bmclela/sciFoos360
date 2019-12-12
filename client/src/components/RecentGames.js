import React from "react";
import { ListGroup } from "react-bootstrap";

import RecentGameItem from "./RecentGameItem";

class RecentGames extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: 80,
            paddingTop: 15
          }}
        >
          <h3
            style={{
              textAlign: "center",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            Recent Games
          </h3>
        </div>
        <ListGroup>
          <RecentGameItem />
          <RecentGameItem />
          <RecentGameItem />
          <RecentGameItem />
          <RecentGameItem />
          <RecentGameItem />
          <RecentGameItem />
          <RecentGameItem />
          <RecentGameItem />
          <RecentGameItem />
        </ListGroup>
      </div>
    );
  }
}

export default RecentGames;
