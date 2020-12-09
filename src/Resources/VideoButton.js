import React from 'react';
import './OtherResources.css'

const VideoButton =props =>  {


return (

<button className="video-button" onClick={props.changeUrl} id={props.videoUrl}>{props.children} 
</button>
) 
    }

export default VideoButton; 
