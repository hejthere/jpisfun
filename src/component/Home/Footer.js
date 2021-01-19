import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './home.css'
import '../../App.css'

export default function Footer() {
    return (
        <Container fluid className='footer-container'>
        <Row xs={1} sm={2} lg={3} xl={3} className='p-3 px-5'>
            <Col className='text-left'>
            <h3 className='homepage-brand'>Hejthere</h3>
            <div>Contact :<br />
            <FontAwesomeIcon icon={faPhoneAlt} /> (+852) 1234 5678<br />
            <FontAwesomeIcon icon={faEnvelope} /> abd@abc.com </div>
            </Col>

            <Col className='text-left'>
            <h5>About Us</h5>
            <div>Hejthere is a website with resources for learning Japanese. Feel free to leave us some comments. 
            </div>
            </Col>
            <Col> <h5>Social Media </h5>
            <div>
            <FontAwesomeIcon icon={faFacebook} size='3x'/> &nbsp;
            <FontAwesomeIcon icon={faInstagram} size='3x'/> &nbsp;
            <FontAwesomeIcon icon={faTwitter} size='3x'/> &nbsp;

            </div>
            </Col>
        </Row>
        <Row><p className='w-100 text-center'>©2021 Hejthere Hong Kong</p></Row>
        </Container>
    )
}
