import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Greeting from '../../Picture/greeting.png'
import food from '../../Picture/food.png'
import disease from '../../Picture/disease.png'
import fuji from '../../Picture/fuji.png'
import daruma from '../../Picture/daruma.png'
import './home.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const home = props => {

return (
<div>
<Row xs={1} sm={1} md={3} lg={3} fluid className="menu"> 
<Col className="menu-col"style={{ backgroundColor:'#496D89'}} >
	<Link className="picturelink" to='/quiz'>
		<Image className="subpagelink" src={Greeting} alt='greeting' /> <h5 className="subpagelinkword"> &nbsp; Quiz </h5> </Link>
 </Col>
 <Col className="menu-col" style={{ backgroundColor:'#ffcc00'}}>
	<Link className="picturelink" to='/vocabulary'>
		<Image className="subpagelink" src ={disease} alt='disease'/> <h5 className="subpagelinkword"> &nbsp; Vocabulary </h5></Link>
 </Col>
<Col className="menu-col" style={{ backgroundColor:'#aa5939'}}> 
	<Link  className="picturelink" to='/resources'>
		<Image src ={food} className="subpagelink" alt='food' /> <h5 className="subpagelinkword"> &nbsp; Resources </h5></Link>
</Col> 
</Row>

{/* / <!-- Introduction --> // */}
<Container fluid>
<div className="homepage-section1">
<Image src={fuji} alt="FujiMountain" data-aos="fade-in" data-aos-delay="300" />
<div>
<h2> For Japanese Beginners </h2>
<span> You could learn some basic Japanese Vocabulary and Grammar Practice in this website.</span><br />
<br /><Link to='/katakana'>
	<Button disabled>MORE</Button></Link>
</div>
</div>
</Container> 

{/* /* <!-- Japanese Vocab --> */ }

<Container fluid >
	<div className="homepage-section2">
	<div>
	<h2> Japanese Vocabulary </h2>
	<span> Learn Daily Japanese Vocabulary with Exercise and Audio. </span><br/>
	<br/>
	<Button disabled>MORE</Button>
	</div>
	<Image src={daruma} alt="Daruma" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" />
	</div>
 </Container> 
 </div>

    );};

export default home; 
