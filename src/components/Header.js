import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='navbar'>
        {/* <Container> */}
          <Navbar.Brand className="brand" href="/" style={{ color: 'black' }}><img src='./images/logo.png' alt="" style={{ height: '50px' }}></img>Learnoline</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navlinks">
              <Nav.Link href="/" style={{margin: '0 auto'}}>Home</Nav.Link>
              <Nav.Link href="/liveclass" style={{margin: '0 auto'}}>Live Class</Nav.Link>
              <Nav.Link href="/books" style={{margin: '0 auto'}}>NCERT Books</Nav.Link>
              <Nav.Link href="/solutions" style={{margin: '0 auto'}}>Solutions</Nav.Link>
              <Nav.Link href="/videos" style={{margin: '0 auto'}}>Videos</Nav.Link>
              <Button className='btn btn-primary btn-sm' 
              style={{margin: '0 auto' ,background:'#334155', padding: '0 20px', border: 'none', borderRadius: '5px', fontWeight: 'bold'}}>Install Now</Button>
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}

      </Navbar>
    </header>
  )
}

export default Header
