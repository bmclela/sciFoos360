import React, { useState } from "react";
import { Collapse, ListGroup } from "react-bootstrap";
import DeleteGame from "./DeleteGame";

const RecentGameItem = props => {
  const [open, setOpen] = useState(false);

  const displayDate = date => {
    let msec = Date.parse(date);
    date = new Date(msec);
    let monthNumber = date.getMonth();
    let day = date.getDate() + 1;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let month;
    let ampm = "AM";
    switch (monthNumber) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
      default:
        console.log("Error");
    }
    if (hours > 12) {
      hours -= 12;
      ampm = "PM";
    }
    return `${month} ${day} ${hours}:${minutes} ${ampm}`;
  };

  return (
    <div>
      <ListGroup.Item
        style={{
          background: "rgba(255, 255, 255, 0.3)",
          textAlign: "center",
          cursor: "pointer",
          marginBottom: 10
        }}
      >
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <div style={{ textAlign: "center" }}>
            {props.winner1} and {props.winner2}
          </div>
        </div>
        <Collapse in={open} onClick={() => setOpen(!open)}>
          <div id="example-collapse-text">
            <div
              style={{
                display: "inline-block",
                textAlign: "center",
                width: 33 + "%"
              }}
            >
              {displayDate(props.date)}
            </div>
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
