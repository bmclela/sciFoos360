import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

const AddGame = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [winner1, setWinner1] = useState('');
  // const [winner2, setWinner2] = useState('');
  // const [loser1, setloser1] = useState('');
  // const [loser2, setloser2] = useState('');

  const selectWinner1 = e => {
    e.preventDefault();
    setWinner1({ winner1: e.target.value });
  };
  console.log(winner1);

  const handleSubmit = () => {
    props.addGame({
      gameId: 2,
      winner1: 'Ben',
      winner2: 'Ryan',
      loser1: 'Sam',
      loser2: 'Grayson',
      date: Date.now
    });
    handleClose();
  };

  return (
    <div>
      <Button variant='secondary' onClick={handleShow}>
        Add Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{ backgroundColor: '#424242', color: 'white' }}
          closeButton
        >
          <Modal.Title>New Game</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            textAlign: 'center',
            backgroundColor: '#424242',
            color: 'white'
          }}
        >
          <Row>
            <Col>
              <h3>Winning</h3>
              <h3>Team</h3>
              <Form.Group>
                <Form.Control
                  as='select'
                  value={winner1}
                  onChange={selectWinner1}
                >
                  <option>Ben</option>
                  <option>Ryan</option>
                  <option>Sam</option>
                  <option>Grayson</option>
                  <option>Tracey</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control as='select'>
                  <option>Ben</option>
                  <option>Ryan</option>
                  <option>Sam</option>
                  <option>Grayson</option>
                  <option>Tracey</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <h3>Losing</h3>
              <h3>Team</h3>
              <Form.Group>
                <Form.Control as='select'>
                  <option>Ben</option>
                  <option>Ryan</option>
                  <option>Sam</option>
                  <option>Grayson</option>
                  <option>Tracey</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control as='select'>
                  <option>Ben</option>
                  <option>Ryan</option>
                  <option>Sam</option>
                  <option>Grayson</option>
                  <option>Tracey</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#424242', color: 'white' }}>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='info' onClick={handleSubmit}>
            Submit Game
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default connect(null, actions)(AddGame);
