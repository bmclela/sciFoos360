import React, { useState } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
        variant='danger'
        style={{
          height: '20px',
          lineHeight: '0px',
          margin: '0px',
          paddingTop: '17px',
          paddingBottom: '17px'
        }}
        onClick={handleShow}
      >
        X
      </Button>

      <Modal show={show} onHide={handleClose} variant='secondary' size='sm'>
        <Modal.Body
          variant='secondary'
          style={{
            textAlign: 'center',
            backgroundColor: '#282828',
            color: 'white',
            border: '1px solid'
          }}
        >
          <div>Are you sure you want to delete this game?</div>
          <br />
          <Card
            style={{
              margin: 'auto',
              width: '80%',
              borderColor: '#6c757d',
              backgroundColor: '#6c757d',
              marginBottom: '30px'
            }}
          >
            <Card.Body>
              <div style={{ textAlign: 'center' }}>
                {props.winner1} and {props.winner2}
              </div>
              beat
              <div style={{ textAlign: 'center' }}>
                {props.loser1} and {props.loser2}
              </div>
            </Card.Body>
          </Card>
          <Button
            variant='outline-secondary'
            onClick={handleClose}
            style={{ float: 'left' }}
          >
            Close
          </Button>
          <Button
            variant='danger'
            onClick={handleSubmit}
            style={{ float: 'right' }}
          >
            Delete Game
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ games }) => {
  return { games };
};

export default connect(mapStateToProps, actions)(DeleteGame);
