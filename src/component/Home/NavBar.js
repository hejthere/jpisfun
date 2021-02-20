import React from 'react'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faVial, faAddressBook, faPencilAlt, faGlasses } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function NavBar() {

    return (
        <Container fluid="true">
            <Navbar collapseOnSelect expand='md' bg="dark" variant="dark" >
                <Navbar.Brand className="homepage-brand">Hejthere</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav fill='true' fluid='true' className='w-100'>
                        <Nav.Link href='/' className='nav-link'>
                            <FontAwesomeIcon className='mx-2' icon={faIgloo} />Home</Nav.Link>
                        <NavDropdown title={<span>
                            <FontAwesomeIcon className='mx-2' icon={faVial} />
                            Quiz</span>} id="nav-dropdown">
                            <NavDropdown.Item eventKey="1.1"><Link to="/quiz/katakana">(Level 1) Katakana Test</Link></NavDropdown.Item>
                            <NavDropdown.Item eventKey="1.2"><Link to="/quiz/test">(Level 2) Greetings</Link></NavDropdown.Item>
                            <NavDropdown.Item eventKey="1.3"><Link to="/quiz/grammar">(Level 3) Grammar Practice</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span>
                            <FontAwesomeIcon className='mx-2' icon={faPencilAlt} />
                            Vocabulary</span>} id="nav-dropdown">
                            <NavDropdown.Item eventKey="2.1"><Link to='/vocabulary/kanji'>Kanji</Link></NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.2"><Link to='/vocabulary/quotes'>Quotes of Today</Link></NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.3"><Link to="/vocabulary/vocabdiseases">Diseases</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='nav-link' href='/resources'>
                            <FontAwesomeIcon className='mx-2' icon={faGlasses} />
                            Resources</Nav.Link>
                        <Nav.Link className='nav-link' href='/contactus'>
                            <FontAwesomeIcon className='mx-2' icon={faAddressBook} />
                            Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container >

    )
}
