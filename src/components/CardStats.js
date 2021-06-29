import React from 'react'
import {Card} from 'react-bootstrap'

const CardStats = (props) => {
    return (
        <div>
       <Card style={{borderRadius: '5px', marginBottom: '10px'}}>
        <Card.Body>
          <Card.Title style={{fontSize: '14px', color:'#94A3B8', fontWeight:'bolder'}}>{props.title} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" 
           style={{fontSize: '22px', fontWeight: 'bold', color:'#334195'}}>{props.subtitle}
          <i className={props.icon} style={{float: 'right'}}></i></Card.Subtitle>
          <Card.Text><span style={{color:'green', paddingRight:'5px'}}>
            <i className={props.arrow} style={{ paddingRight:'5px'}}></i>{props.percentage}%</span>{props.text}</Card.Text>
         </Card.Body>
      </Card>
    </div>
    )
}

export default CardStats

