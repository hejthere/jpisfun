import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import './home.css'

const Banner = props => {

return ( 

<Container className='bannerContainer'fluid="true"> 
<Image src={props.backgrounds} alt='background' fluid='true' style={{'opacity':'0.5'}}/>
<p className="bannertext"> ようこそ</p>
</Container>

)
}

export default Banner;