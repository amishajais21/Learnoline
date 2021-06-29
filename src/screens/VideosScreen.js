import React from 'react'
import VideoCard from '../components/VideoCard'
import {Row,Col ,Button} from 'react-bootstrap'
import videos from '../data/videos'
import {Link} from 'react-router-dom'

const VideosScreen = () => {
    return (
        <>
        <div className="container py-3" style={{marginTop: '40px'}}>
        <div style={{margin:'30px 0'}}>
        <h1 className='heading2'>Select Class</h1>
        <Row>
            <Col ><Link to={`/videos/class`}><Button className='btn btn-block classbtn btn-lg' style={{color: '#ef4444'}}>Class 8</Button></Link></Col>
            <Col ><Link to={`/videos/class`}><Button className='btn btn-block classbtn btn-lg' style={{color: '#ec4899'}}>Class 9</Button></Link></Col>
            <Col ><Link to={`/videos/class`}><Button className='btn btn-block classbtn btn-lg' style={{color: '#f97316'}}>Class 10</Button></Link></Col>
            <Col ><Link to={`/videos/class`}><Button className='btn btn-block classbtn btn-lg' style={{color: '#0ea5e9'}}>Class 11</Button></Link></Col>
            <Col ><Link to={`/videos/class`}><Button className='btn btn-block classbtn btn-lg' style={{color: '#4caf50'}}>Class 12</Button></Link></Col>
        </Row>
        </div>
        </div>
        <section style={{padding:'20px 0'}}>
            <div className="videogrid container">
        <h1 className='heading2'>Free Concept Videos</h1>
        <h6 style={{color: 'black'}}>Watch short concept based video lectures with examples created by our experts. Watch these videos in Hinglish and make study easier.</h6>
        <p style={{paddingTop: '30px'}}>*All the videos used in this page belong to their respective owners and I or this website does not claim any right over them.</p>
        <Row>
            {videos.map((video)=>(
                <Col key={video._id} xs={12} md={6} lg={4} xl={4}>
                    <VideoCard video={video} />
                </Col>
            ))}
        </Row>
        
        </div>
        </section>
        
        </>
    )
}

export default VideosScreen
