import React from 'react'
import {Card} from 'react-bootstrap'


const Book = ({book}) => {
    return (
        <Card className='my-3  d-flex card' style={{height: '90%'}}>
        <Card.Img variant="top" src={book.image} />
        <Card.Body>        
          <Card.Title as='div'><strong>{book.name}</strong></Card.Title>
          <Card.Text as='h4'><a href="/images/image.jpg" download="demo.pdf"><i className='fas fa-download' style={{paddingRight: '5px', color:'maroon'}}></i>Download</a></Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Book
