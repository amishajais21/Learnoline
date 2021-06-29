import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const VideoCard = ({video}) => {
    return (
        <div>
            <Card style={{marginTop: '20px'}}>
            <iframe src={video.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <Card.Body>
               <Card.Title>{video.name}</Card.Title>
             </Card.Body>
           </Card>         
        </div>
    )
}

export default VideoCard
