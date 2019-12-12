import React, { useState } from "react";
import { Collapse, ListGroup } from "react-bootstrap";

const RecentGameItem = () => {
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
          <div style={{ textAlign: "center" }}>Player1 and Player2</div>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <div style={{ textAlign: "center" }}>beat</div>
            <div style={{ textAlign: "center" }}>Player3 and Player4</div>
          </div>
        </Collapse>
      </ListGroup.Item>
    </div>
  );
};

export default RecentGameItem;
