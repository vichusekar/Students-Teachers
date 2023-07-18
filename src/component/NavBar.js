import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate } from 'react-router-dom';



function NavBar() {
  let navigate = useNavigate()
  return <>
    <div className='nav-wrapper'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
          <Navbar.Brand href="#">Student&Teacher Management </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>Home</Nav.Link>
              <Nav.Link onClick={()=>navigate('/student')}>Student's List</Nav.Link>
              <Nav.Link onClick={()=>navigate('/teacher')}>Teacher's List</Nav.Link>
             </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </>
}

export default NavBar