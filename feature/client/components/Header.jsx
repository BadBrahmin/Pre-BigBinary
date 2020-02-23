import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Navbar.Brand href='#home'>Github Labels</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </Navbar>
      </Container>
    );
  }
}

export default Header;
