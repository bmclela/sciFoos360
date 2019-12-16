import React from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import AddGame from './AddGame';
import AddPlayer from './AddPlayer';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar id='navbar' fixed='top' variant='dark' expand='md'>
          <Navbar.Brand href='/'>
            <div to='/' style={{ fontSize: 26 }}>
              SCI Foos<span style={{ color: 'red' }}>360</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/' exact>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/players'>
                <Nav.Link>Players</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/teams'>
                <Nav.Link>Teams</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/tournament">
                <Nav.Link>Tournament</Nav.Link>
              </LinkContainer> */}
            </Nav>
            <Form inline>
              <AddPlayer />
            </Form>
            <div style={{ marginLeft: '20px' }}></div>
            <Form inline>
              <AddGame />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
