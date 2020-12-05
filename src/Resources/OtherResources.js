import React, { Component } from 'react';
import VideoButton from './VideoButton';

class OtherResources extends Component { 
state = { 
video: [
{id:'video1', title:'Mr. Yabatan - Daily Life in Japanese', Url:'https://www.youtube.com/embed/zhQGGLvWftQ' }, 
{id:'video2', title:'Ryuu TV - Daily Conversation', Url:'https://www.youtube.com/embed/orcdcRp3vIw' }, 
{id:'video3', title:'Dogen - Japanese Comedic Lessons', Url:'https://www.youtube.com/embed/ucqMh9iYpTo'  }
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
<br />
<br />
</div> 

 


)}} 


export default OtherResources; 