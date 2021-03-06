import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import './home.css'

const Banner = props => {

    return (

        <Container className='banner-container' fluid="true">
            <Image src={props.backgrounds} className='banner-image' alt='background' fluid="true" style={{ 'opacity': '0.5' }} />
            <h2 className="banner-text"> ようこそ</h2>
        </Container>
    )
}

export default Banner;