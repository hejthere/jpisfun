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
<Row xs={1} sm={1} md={3} lg={3} fluid='true' className="menu"> 
<Col className="menu-col"style={{ backgroundColor:'#496D89'}} >
	<Link className="picturelink" to='/test'>
		<Image className="subpagelink" src={Greeting} alt='greeting' /> <p className="subpagelinkword"> &nbsp; Greetings </p> </Link>
 </Col>
 <Col className="menu-col" style={{ backgroundColor:'#ffcc00'}}>
	<Link className="picturelink" to='/VocabDiseases'>
		<Image className="subpagelink" src ={disease} alt='disease'/> <p className="subpagelinkword"> &nbsp; Diseases </p></Link>
 </Col>
<Col className="menu-col" style={{ backgroundColor:'#aa5939'}}> 
	<Link  className="picturelink" to='/quotes'>
		<Image src ={food} className="subpagelink" alt='food' /> <p className="subpagelinkword"> &nbsp; Quotes </p></Link>
</Col> 
</Row>

{/* / <!-- Introduction --> // */}
<Container fluid='true' className="simple-introduction">
<Image src={fuji} alt="FujiMountain" data-aos="fade-in" data-aos-delay="300" />
<div>
<h2> For Japanese Beginners </h2>
<span> You could learn some basic Japanese Vocaburary and Grammar Practice in this website.</span><br />
<br /><Link to='/katakana'>
	<Button>MORE</Button></Link>
</div>
</Container> 

{/* /* <!-- Japanese Vocab --> */ }

<Container  fluid='true' className="homepage-japan-vocab">
	<div>
	<h2> Japanese Vocaburary </h2>
	<span> Learn Daily Japanese Vocaburary with Exercise and Audio. </span><br/><br/>
	<Button>MORE</Button>
	</div>
	<Image src={daruma} alt="Daruma" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" />
 </Container> 
 </div>

    );};

export default home; 
