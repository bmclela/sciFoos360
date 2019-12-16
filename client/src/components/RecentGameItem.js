import React, { useState } from "react";
import { Collapse, ListGroup } from "react-bootstrap";
import DeleteGame from "./DeleteGame";

const RecentGameItem = props => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: 10 }}>
      <ListGroup.Item style={{ background: "rgba(255, 255, 255, 0.3)" }}>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          style={{
            textAlign: "center",
            cursor: "pointer"
          }}
        >
          <div style={{ textAlign: "center" }}>
            {props.winner1} and {props.winner2}
          </div>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <div
              style={{
                display: "inline-block",
                textAlign: "center",
                width: 33 + "%"
              }}
            ></div>
            <div
              style={{
                display: "inline-block",
                textAlign: "center",
                width: 33 + "%"
              }}
            >
              beat
            </div>
            <div
              style={{
                display: "inline-block",
                textAlign: "right",
                width: 33 + "%"
              }}
            >
              <DeleteGame
                id={props.id}
                winner1={props.winner1}
                winner2={props.winner2}
                loser1={props.loser1}
                loser2={props.loser2}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              {props.loser1} and {props.loser2}
            </div>
          </div>
        </Collapse>
      </ListGroup.Item>
    </div>
  );
};

export default RecentGameItem;
