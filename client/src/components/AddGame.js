import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

const AddGame = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [error, setError] = useState(false);

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
      !winner1.winner1 ||
      !winner2.winner2 ||
      !loser1.loser1 ||
      !loser2.loser2
    ) {
      setError('missingInput');
    } else if (
      winner1.winner1 === winner2.winner2 ||
      winner2.winner2 === loser1.loser1 ||
      loser1.loser1 === loser2.loser2 ||
      winner1.winner1 === loser1.loser1 ||
      winner1.winner1 === loser2.loser2 ||
      winner2.winner2 === loser1.loser1 ||
      winner2.winner2 === loser2.loser2
    ) {
      setError('matchingNames');
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

  const playerList = props.players
    .sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      return nameA < nameB ? -1 : 1;
    })
    .map(player => {
      return <option key={player._id}>{player.name}</option>;
    });

  const ShowErrorMessage = () => {
    if (error === 'missingInput') {
      setTimeout(() => {
        setError(null);
      }, 3000);
      return (
        <div style={{ color: 'red', marginTop: '10px' }}>Missing players</div>
      );
    } else if (error === 'matchingNames') {
      setTimeout(() => {
        setError(null);
      }, 3000);

      return (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Cannot add the same player twice
        </div>
      );
    } else return null;
  };

  return (
    <div style={{ borderRadius: '25px' }}>
      <Button id='addGameButton' variant='secondary' onClick={handleShow}>
        Add Game
      </Button>

      <Modal show={show} onHide={handleClose} variant='secondary'>
        <Modal.Body
          variant='secondary'
          style={{
            textAlign: 'center',
            backgroundColor: '#282828',
            color: 'white',
            border: '1px solid'
          }}
        >
          <Row>
            <Col>
              <h4>Winning</h4>
              <h4>Team</h4>
              <Form.Group variant='secondary'>
                <Form.Control
                  as='select'
                  onChange={selectWinner1}
                  defaultValue={'DEFAULT'}
                >
                  <option value='DEFAULT' disabled hidden></option>
                  {playerList}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as='select'
                  onChange={selectWinner2}
                  defaultValue={'DEFAULT'}
                >
                  <option value='DEFAULT' disabled hidden></option>
                  {playerList}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <h4>Losing</h4>
              <h4>Team</h4>
              <Form.Group>
                <Form.Control
                  as='select'
                  onChange={selectLoser1}
                  defaultValue={'DEFAULT'}
                >
                  <option value='DEFAULT' disabled hidden></option>
                  {playerList}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as='select'
                  onChange={selectLoser2}
                  defaultValue={'DEFAULT'}
                >
                  <option value='DEFAULT' disabled hidden></option>
                  {playerList}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <ShowErrorMessage />
          <Button
            variant='outline-secondary'
            onClick={handleClose}
            style={{ float: 'left' }}
          >
            Close
          </Button>
          <Button
            variant='info'
            onClick={handleSubmit}
            style={{ float: 'right' }}
          >
            Submit Game
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ players }) => {
  return { players };
};

export default connect(mapStateToProps, actions)(AddGame);
