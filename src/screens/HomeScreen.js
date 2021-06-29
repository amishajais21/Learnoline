import React from 'react'
import { Container,Image, Row, Col, Button } from 'react-bootstrap'
import CardStats from '../components/CardStats'
import Reviews from '../components/Reviews'
import reviews from '../data/Reviews'

const HomeScreen = () => {
    return (
        <>
        <section className='section1'>
            <div className="items-center flex" style={{backgroundColor: 'white'}}>           
                <Row>  
                
                        <Col lg={6} className="intro">
                       
                        <div className="container center mx-auto items-center  py-3">
                            <div className="px-4">
                                <div className="col-md-10 ms-auto">
                                    <h2 className="heading1"> Learn better with the best doubt clearing app </h2>
                                    <p className="desc">The biggest benefit of Learnoline is the utter lack of pressure. Because you get to set your own schedule and study only when you have time, Learnoline makes learning not something you have to get over with, but something you look forward to! From experience, you learn more when you enjoy the process.
                                    </p>
                                    <div className="mx-auto">
                                        <Button href="" target="_blank" className="playstorebtn" size="lg"> Playstore </Button>
                                        <Button href="/solutions" target="_blank" className="playstorebtn" size="lg" style={{margin: '0 auto' ,background:'#334155'}}> Get Started </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </Col>
                    
                    <Col lg={6}  >
                    <Image className="col-sm-6 image1" src="/images/pattern_react2.jpg" alt="..." fluid />
                    </Col>
                    
                </Row>             
            </div>
        </section>
       
        <div style={{padding: '40px 0', background: '#475569'}}>
          <Container className="center mx-auto items-center"  >
            <Row style={{width: '100%'}}>
              <Col lg={3} md={6} sm={12}>
                <CardStats 
                  title="DOWNLOADS" 
                  subtitle="450,897" 
                  icon="fas fa-arrow-alt-circle-down"
                  arrow="fas fa-arrow-up"
                  percentage="3.48"
                  text="Since last month" 
                  color="green"
                />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <CardStats 
                  title="NEW USERS" 
                  subtitle="2,356" 
                  icon="fas fa-user-graduate"
                  arrow="fas fa-arrow-up"
                  percentage="2.48"
                  text="Since last month" 
                  color="yellow"
                />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <CardStats 
                  title="PROBLEMS SOLVED" 
                  subtitle="10,897" 
                  icon="fas fa-book-open"
                  arrow="fas fa-arrow-up"
                  percentage="3.48"
                  text="Since last month" 
                  color="blue"
                />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <CardStats 
                  title="CLASSES COMPLETED" 
                  subtitle="450,897" 
                  icon="fas fa-video"
                  arrow="fas fa-arrow-up"
                  percentage="3.48"
                  text="Since last month" 
                  color="red"
                />
              </Col>
           </Row>
           </Container>
           </div>
           <div className='px-4' style={{background:'#475569'}}>
             <h3 style={{color:'white', fontWeight: 'bold'}}>What our Students have to say!!</h3>
             <Row>
             {reviews.map((review)=>(
                <Col key={review._id} xs={12} lg={3} xl={3}>
                    <Reviews props={review} />
                </Col>
            ))}
              </Row>
           </div>
        </>
    )
}

export default HomeScreen
