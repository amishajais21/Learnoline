import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer style={{ transform: "translateY(10)", background:'#e4e4e7', paddingTop: '60px' }}>

            <Container fluid className="footer text-center text-md-left">
        <Row>
          <Col md="6">
              <img src="./images/logo.png" alt="logo" style={{marginTop: '15px'}}/>
            <h3 className="title" style={{color: '#475569', fontWeight:'bold'}}>Lernoline</h3>
            <p>
            The beautiful thing about learning is nobody can take it away from you.
            </p>
          </Col>
          <Col md="2">
            <h5 className="title">Video Lectures</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/videos">Archimedes’ Principle</a>
              </li>
              <li className="list-unstyled">
                <a href="/videos">IUPAC Nomenclature</a>
              </li>
              <li className="list-unstyled">
                <a href="/videos">Acids Bases and Salts</a>
              </li>
              <li className="list-unstyled">
                <a href="/videos">Probability</a>
              </li>
              <li className="list-unstyled">
                <a href="/videos">Allotropes of Carbon</a>
              </li>
              <li className="list-unstyled">
                <a href="/videos">Real Numbers</a>
              </li>
              <li className="list-unstyled">
                <a href="/videos">Atmospheric Refraction</a>
              </li>
              <li className="list-unstyled">
                <a href="/videos">Atoms and Molecules</a>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h5 className="title" >NCERT Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/books">Mathematics-Class X</a>
              </li>
              <li className="list-unstyled">
                <a href="/books">Science-Class VIII</a>
              </li>
              <li className="list-unstyled">
                <a href="/books">English-Class X</a>
              </li>
              <li className="list-unstyled">
                <a href="/books">Hindi-Class X</a>
              </li>
              <li className="list-unstyled">
                <a href="/books">Chemistry-Class XI</a>
              </li>
              <li className="list-unstyled">
                <a href="/books">Physics-Class XII</a>
              </li>
              <li className="list-unstyled">
                <a href="/books">Sanskrit-Class X</a>
              </li>
              <li className="list-unstyled">
                <a href="/books">Chemistry-Class XII</a>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h5 className="title">Solution</h5>
            <ul>
            <li className="list-unstyled">
              <li className="list-unstyled">
                <a href="/solutions">Hindi-Class X</a>
              </li>
                <a href="/solutions">Mathematics-Class X</a>
              </li>
              <li className="list-unstyled">
                <a href="/solutions">Sanskrit-Class X</a>
              </li>
              <li className="list-unstyled">
                <a href="/solutions">Science-Class VIII</a>
              </li>
              <li className="list-unstyled">
                <a href="/solutions">English-Class X</a>
              </li>  
              <li className="list-unstyled">
                <a href="/solutions">Chemistry-Class XI</a>
              </li>
              <li className="list-unstyled">
                <a href="/solutions">Physics-Class XII</a>
              </li>
              <li className="list-unstyled">
                <a href="/solutions">Chemistry-Class XII</a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
      <hr className="mx-auto" style={{width: '60%'}}/>
      <div className="footer-copyright text-center py-3" style={{color:"black", fontWeight:"bold"}}>
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright Learnoline
        </Container>
      </div>
        </footer>
    )
}

export default Footer
