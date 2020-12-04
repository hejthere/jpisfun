import React from 'react';

const VideoButton =props =>  {


return (

<button onClick={props.changeUrl} id={props.videoUrl}>{props.children} 
</button>
) 
    }

export default VideoButton; 
