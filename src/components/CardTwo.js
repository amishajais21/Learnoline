import React from 'react'
import {Card, Button,Row, Col,Image} from 'react-bootstrap'


const CardTwo = (props) => {
    return (
        <Card style={{padding: '10px 25px', marginBottom: '20px'}}>
         <Card.Body>
             <Row>
                 <Col sm={5} style={{textAlign: 'center'}}>
                 <Image src={props.image} alt="..." fluid style={{borderRadius: '50%', width:'60%'}}/>
                 </Col>
                 <Col sm={7}>
           <Card.Title>{props.title}</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
           </Col>
           </Row>
           
           <Row className="py-4">
               <Col>
           <ul>
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Hindi</a></Card.Link></li>
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Mathematics</a></Card.Link></li>
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Chemistry I</a></Card.Link></li>
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Chemistry II</a></Card.Link></li>
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Physics I</a></Card.Link></li>
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Physics II</a></Card.Link></li>
           </ul>
           </Col>
           <Col>
           <ul>
               
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>History</a></Card.Link></li>
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Geography</a></Card.Link></li>
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Economics</a></Card.Link></li>
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Accountancy</a></Card.Link></li>
               <li><Card.Link href="#"><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Psychology</a></Card.Link></li>
           </ul>
           </Col>
           </Row>
           
         </Card.Body>
       </Card>
    )
}

export default CardTwo
