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
            <Row xs={1} sm={3} lg={3} xl={3} className='px-5'>
                <Col className='d-flex text-left align-items-start  mt-3'>
                    <h3 className='homepage-brand mb-2'>Hejthere</h3>
                </Col>

                <Col className='d-flex align-items-start my-3'>
                    <div>
                        <h5 className="text-left"><b>Contact Us</b></h5>
                        <FontAwesomeIcon icon={faPhoneAlt} /> (+852) 1234 5678<br />
                        <FontAwesomeIcon icon={faEnvelope} /> connie0380@.com
                        </div></Col>

                <Col className='text-left mt-3'>
                    <h5><b>Social Media</b></h5>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} size='2x' />&nbsp;
                        <FontAwesomeIcon icon={faInstagram} size='2x' />&nbsp;
                        <FontAwesomeIcon icon={faTwitter} size='2x' />&nbsp;
                        <p>©2021 Hejthere Hong Kong</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
