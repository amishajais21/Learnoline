import React from 'react'
import videos from '../data/videos'
import {Row,Col, Container, Button, Card} from 'react-bootstrap'
import VideoCard from '../components/VideoCard'

const VideoClassScreen = () => {
    return (
        <div className="py-3" style={{margin: '20px 120px'}}>
            <Row>
                <Col md={9}>
                 <iframe className="video" src="https://www.youtube.com/embed/CJ6aB5ULqa0" title="Class XI - Convex and Concave Lenses" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <h3 className="heading1">Class XI - Convex and Concave Lenses</h3>
               <p>Convex and Concave Lenses are Spherical Lenses. We look at the Image Formation by these spherical lenses using ray diagrams. Light ray rules for Convex Lens and Concave Lens are discussed. Using these rules we can find the position and properties of the image. I'll be the object in this video and you need to find my image!</p>
                <p>Latest Video lectures! See Links below:</p>
                <ul>
                    <li>CBSE Class 10 Courses: https://demo/32425</li>
                    <li>CBSE Class 9 Courses: https://demo/39Pm7mM</li>
                    <li>CBSE Class 8 Courses: https://demo/3bJByzB</li>
                </ul>
                  <p> At Learnoline, learning Concepts is Easy! The school coursework is explained with simple examples that you experience every day! Let's learn every day from everyday life!</p>
                  <p style={{paddingTop: '30px'}}>*All the videos used in this page belong to their respective owners and I or this website does not claim any right over them.</p>
            
                </Col>
                <Col md={3}>
                {videos.map((video,index)=> index< 5 && (
                    <VideoCard video={video} />         
            ))}
                </Col>
            </Row>
  
        </div>
    )
}

export default VideoClassScreen
