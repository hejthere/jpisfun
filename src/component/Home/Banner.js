import React from 'react';
import './home.css'

const Banner = props => {

return ( 

<div className="bannerContainer"> 
<img className="banner" src={props.backgrounds} alt='background' />
<p className="bannertext"> ようこそ</p>
</div>

)
}

export default Banner;