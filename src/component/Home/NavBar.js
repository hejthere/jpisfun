import React from 'react'
import '../../App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faIgloo, faVial, faAddressBook, faPencilAlt, faGlasses } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function NavBar() {

    return (
        <Container fluid="true">
            <Navbar collapseOnSelect expand='md' bg="dark" variant="dark">
                <Navbar.Brand className="homepage-brand">Hejthere</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav id='navBar1' className='navBar' fill fluid="true">
                        <Link className='nav-link' to='/'>
                            {/* <FontAwesomeIcon icon={faIgloo} /> */}
                             Home</Link>
                        <NavDropdown title={<span>
                            {/* <FontAwesomeIcon icon={faVial} />  */}
                            Quiz</span>} id="nav-dropdown">
                            <NavDropdown.Item eventKey="1.1"><Link to="/quiz/katakana">(Level 1) Katakana Test</Link></NavDropdown.Item>
                            <NavDropdown.Item eventKey="1.2"><Link to="/quiz/test">(Level 2) Greetings</Link></NavDropdown.Item>
                            <NavDropdown.Item eventKey="1.3"><Link to="/quiz/grammar">(Level 3) Grammar Practice</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span>
                            {/* <FontAwesomeIcon icon={faPencilAlt} />  */}
                            Vocabulary</span>} id="nav-dropdown">
                            <NavDropdown.Item eventKey="2.1"><Link to='/vocabulary/kanji'>Kanji</Link></NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.2"><Link to='/vocabulary/quotes'>Quotes of Today</Link></NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.3"><Link to="/vocabulary/vocabdiseases">Diseases</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Link className='nav-link' to='/resources'>
                            {/* <FontAwesomeIcon icon={faGlasses} />  */}
                            Resources</Link>
                        <Link className='nav-link' to='/contactus'>
                            {/* <FontAwesomeIcon icon={faAddressBook} />  */}
                            Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>

    )
}
