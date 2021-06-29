import React from 'react'
import {Carousel,Button, Row,Col} from 'react-bootstrap'
import CardThree from '../components/CardThree'

const LiveClassScreen = () => {
    return (
        <section>
    <Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src="/images/carousel1.jpg" alt="First slide"/>
    <Carousel.Caption>
      <h3><Button className="btn btn-lg sliderbtn" variant='info' style={{fontWeight: 'bold'}}>Get Your First Class Absolutely Free </Button></h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/carousel2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 style={{float: 'right'}}><Button className="btn btn-lg sliderbtn" href="" target="_blank" variant="danger" style={{fontWeight: 'bold'}}> Book LIVE Session Now </Button></h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/carousel3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 ><Button href="" target="_blank" variant="primary" className="btn btn-lg sliderbtn" style={{fontWeight: 'bold'}}> Book Free Class Now </Button></h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h3 className="heading1" style={{textAlign: 'center', fontSize: '30px', paddingTop: '10px'}}>Doubt Classes: 1 On 1, Face to Face Sessions With Faculty (On Video Call)</h3>
<div className='container py-4 plans'>
  <Row >
    <Col md={4}><CardThree plan='Daily Plan' title="Live Class + Doubts" icon="fas fa-times" classes="1" doubts="5" price="299"/></Col>
    <Col md={4}><CardThree plan='Weekly Plan' title="Live Class + Doubts + Personal Mentor" icon="fas fa-check" classes="5" doubts="25" price="599"/></Col>
    <Col md={4}><CardThree plan='Monthly Plan' title="Live Class + Doubts + Personal Mentor" icon="fas fa-check" classes="20" doubts="50" price="1099"/></Col>
  </Row>


</div>
        </section>
    )
}

export default LiveClassScreen
