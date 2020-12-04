import React, { Component } from 'react';
import VideoButton from './VideoButton';

class OtherResources extends Component { 
state = { 
video: [
{id:'video1', title:'abc1', Url:'https://www.youtube.com/embed/zhQGGLvWftQ' }, 
{id:'video2', title:'abc2', Url:'https://www.youtube.com/embed/CYFKL_ta7rA' }, 
{id:'video3', title:'abc3', Url:'https://www.youtube.com/embed/4atMVVR0dNE'  }
],
selectedVideo:'', 
showVideo: false
}

changeUrlHandler=(event)=> {
    this.setState({selectedVideo: event.target.id, showVideo: true}
    );
}


render () { 

let playButton = []; 
playButton = this.state.video.map(vdo => {
return ( <VideoButton 
        changeUrl={this.changeUrlHandler} 
        videoUrl={vdo.Url}>{vdo.title}
        </VideoButton> )
})

let videoFrame=[];
if(this.state.showVideo){
videoFrame = <iframe width="560" height="315" src={this.state.selectedVideo} title='jpvideo'></iframe> 
}

return ( 

<div> 
<p> Click on the title to watch the video</p> 
{playButton}
<br />
{videoFrame}

</div> 

 


)}} 


export default OtherResources; 