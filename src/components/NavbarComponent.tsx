import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary navbar">
      <Container className='nav-container'>

      <div className='heading-sub-flex'>
        <h1 className='nav-header'>Michael Knudson, Ph.D.</h1>
        <div className='nav-links'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#bio">Bio</Nav.Link>
                <Nav.Link href="#academic">Academic</Nav.Link>
                <Nav.Link href="#dev">Dev</Nav.Link>
                <Nav.Link href="#personal">Personal</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </div>
      </div>
        <div>
           <Button className='resume-btn'>Resume</Button>
        </div>

      </Container>
    </Navbar>
  )
}

export default NavbarComponent