import React from 'react'
import {Card, Button} from 'react-bootstrap'


const CardSol = ({solution}) => {
    return (
        <Card className={solution.key} style={{margin: '10px 0'}}>
            {/* <img src={solution.image} style={{top: '0'}}/> */}
         <Card.Body>
           <Card.Title style={{fontWeight: 'bold'}}>NCERT</Card.Title>
           <Card.Subtitle className="mb-2 text-muted" style={{fontWeight: 'bold'}}>{solution.name}</Card.Subtitle>
           <Card.Text>{solution.chapters} Chapters</Card.Text>
           <Card.Link href="#"><a href="#" download="demo.pdf"><Button className="btn-sm" style={{borderRadius: '20px'}}>Get PDF</Button></a></Card.Link>
         </Card.Body>
       </Card>
    )
}

export default CardSol
