import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Home from './component/Home/Home'
import Test from './component/JapaneseQuiz/Test/Test'
import './index.css';
import './App.css';
import Grammar from './component/JapaneseQuiz/Grammar/Grammar';
import Contact from './component/Contact/Contact'
import Banner from './component/Home/Banner'
import VocabDiseases from './component/Vocaburary/VocabDiseases';
import OtherResources from './component/Resources/OtherResources';
import RandomQuote from './component/Vocaburary/RandomQuote';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faIgloo, faVial, faAddressBook, faPencilAlt, faGlasses } from '@fortawesome/free-solid-svg-icons'; 
import towerimgage from '../src/Picture/Background.jpg';
import miseimage from '../src/Picture/mise.jpg';
import Katakana from './component/JapaneseQuiz/Katakana/Katakana';
import SavedQuotes from './component/Vocaburary/SavedQuotes';
import JapaneseQuiz from './component/JapaneseQuiz/JapaneseQuiz';
import Vocaburary from './component/Vocaburary/Vocaburary';

class App extends Component {

  render() {

    return (

      <div>

        <Container fluid>
          <Navbar collapseOnSelect expand='md' bg="dark" variant="dark">
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav id='navBar1' className='navBar' fill fluid>
                <Link className='nav-link' to='/'>
                  Home</Link>
                <NavDropdown href='/quiz' title={<span> Quiz</span>} id="nav-dropdown">
                  <NavDropdown.Item href="/quiz/#katakana" eventKey="1.1">(Level 1) Katakana Test</NavDropdown.Item>
                  <NavDropdown.Item href="/quiz/#test" eventKey="1.2">(Level 2) Greetings</NavDropdown.Item>
                  <NavDropdown.Item href="/quiz/#grammar" eventKey="1.3">(Level 3) Grammar Practice</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown href='/vocaburary' title={<span>Vocaburary</span>} id="nav-dropdown">
                  <NavDropdown.Item href="/vocaburary/#quotes" eventKey="2.1">Quotes of Today</NavDropdown.Item>
                  <NavDropdown.Item href="/vocaburary/#diseases" eventKey="2.2">Diseases</NavDropdown.Item>
                </NavDropdown>
                <Link className='nav-link' to='/resources'> Resources</Link>
                <Link className='nav-link' to='/contactus'> Contact Us</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>


        <Switch>
          <Route path="/" exact render={(props) => (
            <Banner  {...props} backgrounds={towerimgage} />)} />
          <Route path="/test" render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
          <Route path="/grammar" render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
          <Route path="/vocabdiseases" render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
          <Route path="/resources" render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
          <Route path="/contactus" render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
          <Route path="/quotes" render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
          <Route path="/katakana" render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
          <Route path="/quiz" render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
          <Route path="/vocaburary" render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
        </Switch>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" exact component={Test} />
          <Route path="/grammar" exact component={Grammar} />
          <Route path="/vocabdiseases" exact component={VocabDiseases} />
          <Route path="/resources" exact component={OtherResources} />
          <Route path="/contactus" exact component={Contact} />
          <Route path="/quotes" exact component={RandomQuote} />
          <Route path="/katakana" exact component={Katakana} />
          <Route path="/savedquotes" exact component={SavedQuotes} />
          <Route path="/quiz" exact component={JapaneseQuiz} />
          <Route path="/vocaburary" exact component={Vocaburary} />
        </Switch>

      </div>
    )
  }
}

export default App;
