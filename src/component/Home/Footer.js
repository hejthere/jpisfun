import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './home.css'
import '../../App.css'

export default function Footer() {
    return (
        <Container fluid="true" className='footer-container'>
            <Row xs={1} sm={3} lg={3} xl={3} className='p-2 px-5'>
                <Col className='text-left'>
                    <h3 className='homepage-brand'>Hejthere</h3>
                    <p>©2021 Hejthere Hong Kong</p>
                </Col>

                <Col className='d-flex justify-content-center'>
                    <div>
                        <h5 className="text-left"><b>Contact Us</b></h5>
                        <div className="text-left">
                            <FontAwesomeIcon icon={faPhoneAlt} /> (+852) 1234 5678<br />
                            <FontAwesomeIcon icon={faEnvelope} /> abd@abc.com
                        </div></div> </Col>

                <Col className='text-center'>
                    <h5><b>Social Media</b></h5>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} size='2x' /> &nbsp;
                        <FontAwesomeIcon icon={faInstagram} size='2x' /> &nbsp;
                        <FontAwesomeIcon icon={faTwitter} size='2x' /> &nbsp;
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
