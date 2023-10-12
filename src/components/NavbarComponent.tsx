import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary navbar">
      <Container className='nav-container'>

      <div className='heading-sub-flex'>
        <h1 className='nav-header'>
          <Nav.Link href='#home'>Michael Knudson, Ph.D.</Nav.Link>
          </h1>
        <div className='nav-links'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav-links">
                <Nav.Link className="scroll-links" href="#bio">Bio</Nav.Link>
                <Nav.Link className="scroll-links" href="#academia">Academia</Nav.Link>
                <Nav.Link className="scroll-links" href="#dev">Dev</Nav.Link>
                <Nav.Link className="scroll-links" href="#personal">Personal</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </div>
      </div>
        <div>
           <a target="_blank" rel='noopener noreferrer' href="https://drive.google.com/file/d/1uE4RF8UzPnsmQY0idsecb8GP7_l3Ik68/view?usp=sharing"><button className='resume-btn'>Resume</button></a>
        </div>

      </Container>
    </Navbar>
  )
}

export default NavbarComponent