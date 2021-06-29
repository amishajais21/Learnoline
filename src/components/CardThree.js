import React from 'react'
import { Card,Button,Row,Col } from 'react-bootstrap'

const CardThree = (props) => {
    return (
        <Card style={{borderRadius: '20px', marginBottom: '20px'}}>
         <Card.Header style={{background: 'rgb(51, 65, 85)', color: 'white', fontWeight: 'bold', fontSize:'16px'}}>
             {props.plan} <i class="fas fa-book-open" style={{color: '#ff8058'}}></i> 
             <i class="fas fa-play-circle" style={{color: '#ffeb3b'}}></i>
             <i class="fas fa-question-circle" style={{color: 'rgb(154 244 255)'}}></i>
             <i class="fas fa-clipboard-list" style={{color: '#aee76b'}}></i></Card.Header>
         <Card.Body>
           <Card.Title>{props.title}</Card.Title>
           <Card.Text>
             <Row>
                <Col>
                <ul>
                    <li><i className='fas fa-check' style={{color: 'gray'}}></i>Concept Videos</li>
                    <li><i className='fas fa-check' style={{color: 'gray'}}></i>NCERT Solutions</li>
                    <li><i className='fas fa-check' style={{color: 'gray'}}></i>Textbookss</li>
                    <li><i className='fas fa-check' style={{color: 'gray'}}></i>Revision Notes</li>
                </ul>
                </Col>
                <Col>
                <ul>
                    <li><i className='fas fa-check'></i>{props.classes} One On One Classes</li>
                    <li><i className='fas fa-check' ></i>{props.doubts} Doubt Credits</li>
                    <li><i className={props.icon}></i>Personal Mentor</li>
                    <li><i className='fas fa-check' ></i>Interactive Learning</li>
                    <li><i className='fas fa-check' ></i>Test Prep</li>
                </ul>
                </Col>
             </Row>
             <Row>
                 <Col>
                 <h5>Starting from Rs.{props.price}</h5>
                 <p>(Up to 50% discount)</p>
                 </Col>
                 <Col >
                 <Button variant="info" style={{float: 'right', background: '#0ea5e9', marginTop: '30px'}}>Select</Button>
                 </Col>
             </Row>
           </Card.Text>
           
         </Card.Body>
       </Card>
    )
}

export default CardThree
