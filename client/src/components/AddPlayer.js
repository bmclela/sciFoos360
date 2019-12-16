import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

const AddPlayer = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');

  const newPlayer = e => {
    setName({ name: e.target.value });
  };

  const handleSubmit = () => {
    if (
      // winner1.winner1 === '' ||
      // winner2.winner2 === '' ||
      // loser1.loser1 === '' ||
      // loser2.loser2 === '' ||
      // winner1.winner1 === winner2.winner2 ||
      // winner2.winner2 === loser1.loser1 ||
      // loser1.loser1 === loser2.loser2 ||
      // winner1.winner1 === loser1.loser1 ||
      // winner1.winner1 === loser2.loser2 ||
      // winner2.winner2 === loser1.loser1 ||
      // winner2.winner2 === loser2.loser2
      false
    ) {
      console.log('Invalid Input');
    } else {
      props.addPlayer({
        name: name.name
      });
      handleClose();
    }
  };

  return (
    <div>
      <Button variant='secondary' onClick={handleShow}>
        Add Player
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{ backgroundColor: '#424242', color: 'white' }}
          closeButton
        >
          <Modal.Title>New Player</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            textAlign: 'center',
            backgroundColor: '#424242',
            color: 'white'
          }}
        >
          <Form.Control
            type='text'
            placeholder='Enter player name'
            onChange={newPlayer}
          />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#424242', color: 'white' }}>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='info' onClick={handleSubmit}>
            Submit Player
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default connect(null, actions)(AddPlayer);
