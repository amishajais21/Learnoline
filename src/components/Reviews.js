import React from 'react'
import { Card, Button,Image, ListGroup,Row,Col } from 'react-bootstrap'
import Rating from './Rating'

const Reviews = ({props}) => {
    return (
        <Card style={{ height: '20%', padding:'20px 0' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
              <Row>
                  <Col>
                  <Card.Title style={{color: '#777',fontWeight: 'bolder'}}>{props.name}</Card.Title>
                  <Card.Subtitle style={{color: 'rgba(100, 116, 139)'}}>{props.role}</Card.Subtitle>
                  </Col>
                  <Col>
                  <Image src={props.img} fluid style={{borderRadius: '50%', height:'60px',float: 'right'}}/>
                  </Col>
              </Row>
              <Card.Text>{props.description}</Card.Text>
          </ListGroup.Item>
          <ListGroup.Item><Rating value={props.rating} /></ListGroup.Item>
          
        </ListGroup>
      </Card>
    )
}

export default Reviews
