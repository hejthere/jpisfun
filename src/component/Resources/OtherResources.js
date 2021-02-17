import React, { useState } from 'react';
import VideoButton from './VideoButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




import './OtherResources.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';


const OtherResources = () => {

    const videoList = [
        { id: 'video1', title: 'Mr. Yabatan - Daily Life in Japanese', Url: 'https://www.youtube.com/embed/zhQGGLvWftQ', color: 'blue' },
        { id: 'video2', title: 'Ryuu TV - Daily Conversation', Url: 'https://www.youtube.com/embed/orcdcRp3vIw', color: 'red' },
        { id: 'video3', title: 'Dogen - Japanese Comedic Lessons', Url: 'https://www.youtube.com/embed/ucqMh9iYpTo', color: 'yellow' }
    ]

    const [video, setVideo] = useState(videoList);
    const [selectedVideo, setSelectedVideo] = useState('');
    const [showVideo, setShowVideo] = useState(true);

    const changeUrlHandler = (event) => {
        setSelectedVideo(event.target.id)
        setShowVideo(true)
    }

    let playButton = [];
    playButton = video.map(vdo => {
        return (<VideoButton
            changeUrl={changeUrlHandler}
            videoUrl={vdo.Url}>{vdo.title}
        </VideoButton>)
    })

    let videoFrame = [];
    if (showVideo) {
        videoFrame = <iframe className='resources-video' src={selectedVideo} title='jpvideo'></iframe>
    }


    return (

        <Container fluid="true">
            <Row fluid="true" xs={1} sm={1} md={2}>
                <Col>
                    <div className='introductionResource'>
                        {/* <FontAwesomeIcon icon={faHandPointDown} />  */}
                        Select an video to watch</div>
                    <div className='video-button-container'>
                        {playButton}
                    </div>
                </Col>
                <Col className='video-container'>
                    <br />
                    <br />
                    {videoFrame}
                </Col>
                <br />
            </Row>
        </Container >
    )
}


export default OtherResources; 