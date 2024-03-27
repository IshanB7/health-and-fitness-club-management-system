import React from 'react';
import { Navbar, Container, Button, Offcanvas } from 'react-bootstrap';
import '../styles/NavBar.css'

function NavBar({username,setIsLoggedIn}) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = (link) => {
    window.location.href = link;
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  }

  let containers;
  switch (localStorage.getItem('account_type')) {
    case 'member': 
      containers = (
        <>
          <Container className='NavLinks' onClick={() => handleClick("/")}>
            <p>Dashboard</p>
          </Container>
          <Container className='NavLinks' onClick={() => handleClick("/profile")}>
            <p>Profile Management</p>
          </Container>
          <Container className='NavLinks' onClick={() => handleClick("/schedule")}>
            <p>Schedule Management</p>
          </Container>
        </>
      );
      break;

    case 'trainer':
      containers = (
        <>
          <Container className='NavLinks' onClick={() => handleClick("/")}>
            <p>Schedule Management</p>
          </Container>
        </>
      );
      break;

    case 'admin':
      containers = (
        <>
          <Container className='NavLinks' onClick={() => handleClick("/")}>
            <p>Room Booking Management</p>
          </Container>
          <Container className='NavLinks' onClick={() => handleClick("/equipment")}>
            <p>Equipment Booking Management</p>
          </Container>
          <Container className='NavLinks' onClick={() => handleClick("/classes")}>
            <p>Classes Schedule Updating</p>
          </Container>
        </>
      )
  }

  let trainer = localStorage.getItem('account_type') === 'trainer';

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container style={{marginLeft: '0px'}}>
          <Button variant="outline-success" onClick={handleShow}>
            Navigation
          </Button>
        </Container>
        <Container style={{marginLeft: '0px', display: 'flex', alignItems: 'center'}}>
          {trainer && (
          <>
            <input type='text' style={{marginLeft: '50%'}}/>
            <Button>Search</Button>
          </>
          )}
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor: '#343a40', color: 'white'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome, {username}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {containers}
          <Container className='NavLinks' onClick={handleLogout}>
            <p>Logout</p>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
