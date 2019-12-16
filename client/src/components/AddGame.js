import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

const AddGame = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [winner1, setWinner1] = useState('');
  const [winner2, setWinner2] = useState('');
  const [loser1, setLoser1] = useState('');
  const [loser2, setLoser2] = useState('');

  const selectWinner1 = e => {
    setWinner1({ winner1: e.target.value });
  };
  const selectWinner2 = e => {
    setWinner2({ winner2: e.target.value });
  };
  const selectLoser1 = e => {
    setLoser1({ loser1: e.target.value });
  };
  const selectLoser2 = e => {
    setLoser2({ loser2: e.target.value });
  };

  const handleSubmit = () => {
    if (
      winner1.winner1 === '' ||
      winner2.winner2 === '' ||
      loser1.loser1 === '' ||
      loser2.loser2 === '' ||
      winner1.winner1 === winner2.winner2 ||
      winner2.winner2 === loser1.loser1 ||
      loser1.loser1 === loser2.loser2 ||
      winner1.winner1 === loser1.loser1 ||
      winner1.winner1 === loser2.loser2 ||
      winner2.winner2 === loser1.loser1 ||
      winner2.winner2 === loser2.loser2
    ) {
      console.log('Invalid Input');
    } else {
      props.addGame({
        winner1: winner1.winner1,
        winner2: winner2.winner2,
        loser1: loser1.loser1,
        loser2: loser2.loser2
      });
      handleClose();
    }
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
                  onChange={selectWinner1}
                  defaultValue={'DEFAULT'}
                >
                  <option value='DEFAULT' disabled hidden></option>
                  <option>Ben</option>
                  <option>Ryan</option>
                  <option>Sam</option>
                  <option>Grayson</option>
                  <option>Tracey</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as='select'
                  onChange={selectWinner2}
                  defaultValue={'DEFAULT'}
                >
                  <option value='DEFAULT' disabled hidden></option>
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
                <Form.Control
                  as='select'
                  onChange={selectLoser1}
                  defaultValue={'DEFAULT'}
                >
                  <option value='DEFAULT' disabled hidden></option>
                  <option>Ben</option>
                  <option>Ryan</option>
                  <option>Sam</option>
                  <option>Grayson</option>
                  <option>Tracey</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as='select'
                  onChange={selectLoser2}
                  defaultValue={'DEFAULT'}
                >
                  <option value='DEFAULT' disabled hidden></option>
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
