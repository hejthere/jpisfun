import React from 'react';
import Button from 'react-bootstrap/Button';
import './OtherResources.css'

const VideoButton = props => {


    return (

        <Button className="video-button" onClick={props.changeUrl} id={props.videoUrl}>{props.children}
        </Button>
    )
}

export default VideoButton; 
