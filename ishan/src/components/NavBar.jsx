import React from 'react';
import { Navbar, Container, Button, Offcanvas } from 'react-bootstrap';
import '../styles/NavBar.css'

function NavBar() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = (link) => {
    window.location.href = link;
  }

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container style={{marginLeft: '0px'}}>
          <Button variant="outline-success" onClick={handleShow}>
            Navigation
          </Button>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor: '#343a40', color: 'white'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className='NavLinks' onClick={() => handleClick("/")}>
            <p>Dashboard</p>
          </Container>
          <Container className='NavLinks' onClick={() => handleClick("/")}>
            <p>Home</p>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
