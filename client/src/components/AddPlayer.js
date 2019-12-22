import React, { useState } from 'react';
import { Button, Modal, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

const AddPlayer = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [error, setError] = useState(false);

  const [name, setName] = useState('');

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
    if (!name.name) {
      setError('noInput');
    } else if (exist) {
      setError('exists');
    } else {
      props.addPlayer({
        name: name.name
      });
      handleClose();
    }
  };

  const showPlayers = () => {
    return props.players
      .sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : 1;
      })
      .map(player => {
        return (
          <ListGroupItem
            style={{
              backgroundColor: 'black',
              color: 'white',
              background: 'rgba(255, 255, 255, 0.3)'
            }}
            variant='dark'
            key={player._id}
          >
            {player.name}
          </ListGroupItem>
        );
      });
  };

  const ShowErrorMessage = () => {
    if (error === 'exists') {
      setTimeout(() => {
        setError(null);
      }, 3000);
      return (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Player already exists
        </div>
      );
    } else if (error === 'noInput') {
      setTimeout(() => {
        setError(null);
      }, 3000);

      return (
        <div style={{ color: 'red', marginTop: '10px' }}>Enter a name</div>
      );
    } else return null;
  };

  return (
    <div>
      <Button variant='secondary' onClick={handleShow}>
        Add Player
      </Button>

      <Modal show={show} onHide={handleClose} size='sm'>
        <Modal.Body
          style={{
            textAlign: 'center',
            backgroundColor: '#282828',
            color: 'white'
          }}
        >
          <ListGroup>{showPlayers()}</ListGroup>

          <ShowErrorMessage />

          <Form.Control
            style={{ marginTop: '15px', marginBottom: '15px' }}
            type='text'
            placeholder='Enter new player name'
            onChange={newPlayer}
          />
          <Button
            variant='secondary'
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
            Submit Player
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ players }) => {
  return { players };
};

export default connect(mapStateToProps, actions)(AddPlayer);
