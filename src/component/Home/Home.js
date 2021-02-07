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

	render(){
		const menuContent = [
			{
				id: 'quiz',
				backgroundColor: 'var(--blue)',
				to: '/quiz',
				img: 'Greeting'
			},
			{
				id: 'vocabulary',
				backgroundColor: 'var(--yellow)',
				to: '/vocabulary',
				img: 'disease'
			},
			{
				id: 'resource',
				backgroundColor: 'var(--red)',
				to: '/resource',
				img: 'food'
			}
		]
		const menu = 


	return (
			<div>
				<Row xs={1} sm={1} md={3} lg={3} fluid className="menu">
					<Col className="menu-col px-3" style={{ backgroundColor: '#496D89' }} >
						<Link className="picture-link" to='/quiz'>
							<Image className="subpage-link" src={Greeting} alt='greeting' /> <h5 className="subpage-link-word"> Quiz </h5> </Link>
					</Col>
					<Col className="menu-col px-3" style={{ backgroundColor: '#ffcc00' }}>
						<Link className="picture-link" to='/vocabulary'>
							<Image className="subpage-link" src={disease} alt='disease' /> <h5 className="subpage-link-word"> Vocabulary </h5></Link>
					</Col>
					<Col className="menu-col px-3" style={{ backgroundColor: '#aa5939' }}>
						<Link className="picture-link" to='/resources'>
							<Image src={food} className="subpage-link" alt='food' /> <h5 className="subpage-link-word"> Resources </h5></Link>
					</Col>
				</Row>

				{/* / <!-- Introduction --> // */}
				<Container fluid="true">
					<div className="homepage-section1">
						<Image src={fuji} alt="FujiMountain" />
						<div>
							<h2> For Japanese Beginners </h2>
							<span> You could learn some basic Japanese Vocabulary and Grammar Practice in this website.</span><br />
							<br /><Link to='/katakana'>
								<Button disabled>MORE</Button></Link>
						</div>
					</div>
				</Container>

				{/* /* <!-- Japanese Vocab --> */}

				<Container fluid="true" >
					<div className="homepage-section2">
						<div>
							<h2> Japanese Vocabulary </h2>
							<span> Learn Daily Japanese Vocabulary with Exercise and Audio. </span><br />
							<br />
							<Button disabled>MORE</Button>
						</div>
						<Image src={daruma} alt="Daruma" />
					</div>
				</Container>
			</div>

		);
	}
};

export default home; 
