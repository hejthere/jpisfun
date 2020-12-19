import React, { Component } from 'react';
import VideoButton from './VideoButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './OtherResources.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons'; 


class OtherResources extends Component { 
state = { 
video: [
{id:'video1', title:'Mr. Yabatan - Daily Life in Japanese', Url:'https://www.youtube.com/embed/zhQGGLvWftQ', color:'blue' }, 
{id:'video2', title:'Ryuu TV - Daily Conversation', Url:'https://www.youtube.com/embed/orcdcRp3vIw', color:'red' }, 
{id:'video3', title:'Dogen - Japanese Comedic Lessons', Url:'https://www.youtube.com/embed/ucqMh9iYpTo', color:'yellow' }
],
selectedVideo:'', 
showVideo: false,
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

// let googleNumber = [];
// googleNumber = this.state.googleID.map(id => { 
// return (
// <tr><td><audio controls="" src={`https://docs.google.com/uc?export=download&amp;id=${id}`}> </audio></td></tr> 
// )}); 



let videoFrame=[];
if(this.state.showVideo){
videoFrame =<iframe className='resources-video' src={this.state.selectedVideo} title='jpvideo'></iframe>
}

return ( 
    
<Container fluid> 
<Row fluid sm={1} md={2}>
<Col> 
<p className='introductionResource'> <FontAwesomeIcon icon={faHandPointDown} /> Select an video to watch <FontAwesomeIcon icon={faHandPointDown} /></p> 
<div className='video-button-container'>
{playButton}
</div>
</Col>
<Col> 
<br />
<br />
{videoFrame}
</Col>
<br />
</Row>
</Container> 

 


)}} 


export default OtherResources; 