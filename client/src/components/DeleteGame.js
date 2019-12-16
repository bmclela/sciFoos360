import React, { useState } from "react";
import { Button, Modal, Card } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";

const DeleteGame = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    props.deleteGame({
      gameId: props.id
    });
    handleClose();
  };

  return (
    <div>
      <Button
        variant="danger"
        style={{
          height: "20px",
          lineHeight: "0px",
          margin: "0px",
          paddingTop: "17px",
          paddingBottom: "17px"
        }}
        onClick={handleShow}
      >
        X
      </Button>

      <Modal show={show} onHide={handleClose} variant="secondary">
        <Modal.Header style={{ backgroundColor: "#282828", color: "white" }}>
          <Modal.Title>Delete Game</Modal.Title>
        </Modal.Header>
        <Modal.Body
          variant="secondary"
          style={{
            textAlign: "center",
            backgroundColor: "#282828",
            color: "white"
          }}
        >
          <div>Are you sure you want to delete this game?</div>
          <br />
          <Card
            style={{
              margin: "auto",
              width: "40%",
              borderColor: "#6c757d",
              backgroundColor: "#282828"
            }}
          >
            <Card.Body>
              <div style={{ textAlign: "center" }}>
                {props.winner1} and {props.winner2}
              </div>
              beat
              <div style={{ textAlign: "center" }}>
                {props.loser1} and {props.loser2}
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer style={{ color: "white", backgroundColor: "#282828" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleSubmit}>
            Delete Game
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ games }) => {
  return { games };
};

export default connect(mapStateToProps, actions)(DeleteGame);
