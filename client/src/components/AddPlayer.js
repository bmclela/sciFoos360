import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";

const AddPlayer = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");

  const newPlayer = e => {
    setName({ name: e.target.value });
  };

  const handleSubmit = () => {
    let exist = false;
    props.players.forEach(player => {
      if (player.name === name.name) {
        exist = true;
      }
    });
    if (name.name !== "" && !exist) {
      props.addPlayer({
        name: name.name
      });
      handleClose();
    } else {
      console.log("Invalid Input");
    }
  };

  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Add Player
      </Button>

      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header style={{ backgroundColor: "#282828", color: "white" }}>
          <Modal.Title>New Player</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            textAlign: "center",
            backgroundColor: "#282828",
            color: "white"
          }}
        >
          <Form.Control
            type="text"
            placeholder="Enter player name"
            onChange={newPlayer}
          />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#282828", color: "white" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleSubmit}>
            Submit Player
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ players }) => {
  return { players };
};

export default connect(mapStateToProps, actions)(AddPlayer);
