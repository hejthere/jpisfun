import React, { Component } from 'react';
import VideoButton from './VideoButton';
import './OtherResources.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons'; 

class OtherResources extends Component { 
state = { 
video: [
{id:'video1', title:'Mr. Yabatan - Daily Life in Japanese', Url:'https://www.youtube.com/embed/zhQGGLvWftQ' }, 
{id:'video2', title:'Ryuu TV - Daily Conversation', Url:'https://www.youtube.com/embed/orcdcRp3vIw' }, 
{id:'video3', title:'Dogen - Japanese Comedic Lessons', Url:'https://www.youtube.com/embed/ucqMh9iYpTo'  }
],
selectedVideo:'', 
showVideo: false,
googleID: [
    "1zzKa3ruvoWsq8mn7xnJcR4I5IaT_xzIK",
"1yyVlZjQOoYbr-bldl8EeHhEPkeEQmwp5",
"1vzxCByeKrjVRb5KItIzVC1_RRiOmoAYP",
"1kZwR4nSiK0eVhFvA-RSaacfBZsfDksjo",
"1PUbGQZcuOcGZczdtYX6S_YY2hhroTV3v",
"14BY1Y3XkYQ1WrrN22pXKlo37p2mARagl",
"1gfJZN16u1W-FNfkWLZenCGj81OM_pMCh",
"1ozGWONG9DB8X9DNxaFS0Wd_65Gv-RDGq",
"17EIA3RQUjhWv86yIeq71yahaSMyCQHz-",
"1JDYEjvIJB6iU3yTaTJb1IRsdbNLQ3kWV",
"1unXxr4mfR2Efaj9D0OrgPR5eAxuJXizu",
"1CxRMRHSCEVpQeLBUH2pSmKTl-_DG5PCw",
"1ngVs1nVoC9alxAEjkT3LNeu8qLAYteG3",
"1aQTKZMM_dVJH_sAZnrNWQneazuUnj8Rx",
"11sYF4owzeNQ5l8GbiU4zE_WDNV5mqAVy",
"1BJUTbafvY_MCsLnTMmVTJrP6qFxw2ZcQ",
"1L2acErXmV9xrWVpRx9WJTOMtxoc_7UeA",
"11_HEgtMMbzAoBx8sf_5vKcZddV4UkJdN",
"1llcFbVNzhYIdJwrlw4DsIzkV7aKGkiOw",
"1FfCUAYlHc3zW6iZ1p-_HMqYPiUVJ60we",
"1_Gpb2OB-O9oTKe8RHbxSXJ8WdRGyuf79",
"1LB2KY6NH0ggNcmvvMEJ8vrX8PS-c7dcp",
"1PcWMrVcw8cI3YOe907t8-YHd7phGYN3i",
"139RpjCUzyOnJ9DYyrxfrGIjdvqSk8iBD",
"1V3NxGu9RcNpLXNTgikz5EAtpFZZwj5zd",
"1NWncmoRfW8_dfPJBFh_1pZyDzE5wGl5R",
"16mc2Vm37uIhMBTL3ysfbNpS9VJwrQOHD",
"1pq3L-1RnHiJj-Ff1kW_OSXLu129Gct63",
"12conlhkE30EkIYmKRlKRGrawkI5VrHd1",
"197f7Vo4lu1rE41EI87Gxc4nggsVb7n98",
"12DX4DCmbRxloJxMhyOcxArRaDuhINXsS",
"1oVDIkBgVBlIw5fBAhT3PXr9T5Gpx1GmO",
"1FIE-_9kZKJx7zJVa8BvflEwIkTZFdn34",
"1rquJqKanjKL1M5WFHqncJwi8qPCwIThY",
"1raxOUHJbwE4vQWpUFlh0cosgOvYd2qVv",
"12zfvfs_jdIjR-nGmFuUAcE212jg97-yV",
"1cdXzCJ3OYfLIPFg6TUMeTgpH3Tbm1uju",
"1J-vSicwXtFZthDOpSm1RYoZwtwWF199j",
    ]

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

let googleNumber = [];
googleNumber = this.state.googleID.map(id => { 
return (
<tr><td><audio controls="" src={`https://docs.google.com/uc?export=download&amp;id=${id}`}> </audio></td></tr> 
)}); 



let videoFrame=[];
if(this.state.showVideo){
videoFrame = <iframe width="560" height="315" src={this.state.selectedVideo} title='jpvideo'></iframe> 
}

return ( 
    
<div> 
<p className='introductionResource'> <FontAwesomeIcon icon={faHandPointDown} /> Click on the title to watch the video <FontAwesomeIcon icon={faHandPointDown} /></p> 
{playButton}
{googleNumber}
<br />
{videoFrame}
<br />
<br />
</div> 

 


)}} 


export default OtherResources; 