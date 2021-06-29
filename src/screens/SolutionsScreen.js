import React from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import CardSol from '../components/CardSol'
import solutions from '../data/solutions'
import CardTwo from '../components/CardTwo'

const SolutionsScreen = () => {
    return (
        <>
        <div className="container py-4 text-center">
           
            <h1 className="heading1" style={{padding: '20px 0'}}>Get Instant Solutions</h1>
            <p style={{fontSize: '20px'}}>Connect with tutors on chat and get your doubt solved!!</p>
            <Button href="" target="_blank" className="playstorebtn" size="lg">Ask Doubt Now</Button>
           
        </div>

        <section className="solution2 py-3" style={{marginTop: '30px'}}>
            <div className="container">
            <h1 className='heading2'>NCERT Solutions</h1>
            <h4>Class VIII</h4>
          <Row>
            {solutions.map((solution)=>(
                <Col key={solution._id}>
                    <CardSol solution={solution} color='red'/>
                </Col>
            ))}
          </Row>
          <h4>Class IX</h4>
          <Row>
            {solutions.map((solution)=>(
                <Col key={solution._id}>
                    <CardSol solution={solution} color='red'/>
                </Col>
            ))}
          </Row>
          <h4>Class X</h4>
          <Row>
            {solutions.map((solution)=>(
                <Col key={solution._id}>
                    <CardSol solution={solution} color='red'/>
                </Col>
            ))}
          </Row>
       </div>
          </section>

          <section className="solution3 ">
          <div className=" container py-4">
          <Row className="container py-4">
              <Col>
              <CardTwo 
              title='Class XI' 
              subtitle='NCERT solutions for all chapters including chapter exercises and practice questions.Download from below.' 
             
              image='/images/11.jpg'/>
              </Col>
              <Col>
              <CardTwo 
              title='Class XII' 
              subtitle='NCERT solutions for all chapters including chapter exercises and practice questions.Download from below.' 
              
              image='/images/12.jpg'/>
              </Col>
          </Row>
          </div>
          </section>
        </>
    )
}

export default SolutionsScreen
