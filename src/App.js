import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom';
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
import VocabDiseases from './component/Vocabulary/VocabDiseases';
import OtherResources from './component/Resources/OtherResources';
import RandomQuote from './component/Vocabulary/RandomQuote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faVial, faAddressBook, faPencilAlt, faGlasses } from '@fortawesome/free-solid-svg-icons'; 
import towerimgage from '../src/Picture/Background.jpg'; 
import miseimage from '../src/Picture/mise.jpg'; 
import Katakana from './component/JapaneseQuiz/katakana/Katakana';
import SavedQuotes from './component/Vocabulary/SavedQuotes';
import JapaneseQuiz from './component/JapaneseQuiz/JapaneseQuiz';
import Vocabulary from './component/Vocabulary/Vocabulary';
import Kanji from './Kanji/Kanji';

class App extends Component {  

  render () {

    return (
    
   <div>

   <Container fluid>
   <Navbar collapseOnSelect expand='md' bg="dark" variant="dark">
   <Navbar.Brand className="homepage-brand">Hejthere - Jp is Fun</Navbar.Brand>
   <Navbar.Toggle />
   <Navbar.Collapse>
    <Nav id='navBar1' className='navBar' fill fluid>
    <Link className='nav-link' to='/'><FontAwesomeIcon icon={faIgloo} /> Home</Link>
    <NavDropdown title={<span><FontAwesomeIcon icon={faVial} /> Quiz</span>} id="nav-dropdown">
        <NavDropdown.Item eventKey="1.1"><Link to="/quiz/katakana">(Level 1) Katakana Test</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="1.2"><Link to="/quiz/test">(Level 2) Greetings</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="1.3"><Link to="/quiz/grammar">(Level 3) Grammar Practice</Link></NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title={<span><FontAwesomeIcon icon={faPencilAlt} /> Vocabulary</span>} id="nav-dropdown">
        <NavDropdown.Item  eventKey="2.1"><Link to='/vocabulary/quotes'>Quotes of Today</Link></NavDropdown.Item>
        <NavDropdown.Item  eventKey="2.2"><Link to="/vocabulary/vocabdiseases">Diseases</Link></NavDropdown.Item>
      </NavDropdown>
		<Link className='nav-link' to='/resources'><FontAwesomeIcon icon={faGlasses} /> Resources</Link> 
    <Link className='nav-link' to='/contactus'><FontAwesomeIcon icon={faAddressBook} /> Contact Us</Link>
    <Link className='nav-link' to='/kanji'><FontAwesomeIcon icon={faAddressBook} /> Kanji</Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </Container>


  <Switch>
  <Route path="/" exact render={(props) => (
    <Banner  {...props} backgrounds={towerimgage} />)} />
  <Route path="/test" render={(props) => (
    <Banner  {...props} backgrounds={miseimage} />)}  /> 
  <Route path="/grammar" render={(props) => (
    <Banner  {...props} backgrounds={miseimage} />)}  /> 
  <Route path="/vocabdiseases" render={(props) => (
    <Banner  {...props} backgrounds={miseimage} />)}  />
  <Route path="/resources" render={(props) => (
    <Banner  {...props} backgrounds={miseimage} />)}  />  
  <Route path="/contactus" render={(props) => (
    <Banner  {...props} backgrounds={miseimage} />)}  /> 
  <Route path="/quotes" render={(props) => (
    <Banner  {...props} backgrounds={miseimage} />)}  />
  <Route path="/katakana" render={(props) => (
    <Banner  {...props} backgrounds={miseimage} />)}  />
  <Route path="/quiz" render={(props) => (
    <Banner  {...props} backgrounds={miseimage} />)}  />
  <Route path="/vocabulary" render={(props) => (
    <Banner  {...props} backgrounds={miseimage} />)}  />
  <Route path="/kanji" render={(props) => (
      <Banner  {...props} backgrounds={miseimage} />)}  />
  </Switch> 
  
  <Switch>
  <Route path="/" exact component={Home} />
  <Route path="/quiz/test" component={Test} /> 
  <Route path="/quiz/grammar" component={Grammar} /> 
  <Route path="/vocabulary/vocabdiseases"  component={VocabDiseases} />
  <Route path="/resources"  component={OtherResources} />  
  <Route path="/contactus"  component={Contact} /> 
  <Route path="/vocabulary/quotes"  component={RandomQuote} />
  <Route path="/quiz/katakana"  component={Katakana} />
  <Route path="/savedquotes"  component={SavedQuotes} />
  <Route path="/quiz"  component={JapaneseQuiz} />
  <Route path="/vocabulary"  component={Vocabulary} />
  <Route path="/kanji"  component={Kanji} />  

  </Switch> 

   </div>
    )}}
    
export default App;
