import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import './home.css'

const Banner = props => {

    return (

        <Container className='banner-container' fluid="true">
            <h2 className="banner-text"> ようこそ</h2>
            <Image src={props.backgrounds} className='banner-image' alt='background' fluid="true" />
        </Container>
    )
}

export default Banner;