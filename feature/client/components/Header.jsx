import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Navbar.Brand href='#home'>Github Labels</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              {/* <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
