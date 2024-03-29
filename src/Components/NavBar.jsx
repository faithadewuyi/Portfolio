import { useState } from 'react'
import { Navbar, Container} from 'react-bootstrap'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <img src={' '} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">My Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#"><img src={} alt=''></img></a>
              <a href="#"><img src={} alt=''></img></a>
              <a href="#"><img src={} alt=''></img></a>
            </div>
            <button className="btn" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
    
  )
}

export default NavBar
