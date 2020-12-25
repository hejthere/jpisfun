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
import VocabDiseases from './component/Vocaburary/VocabDiseases';
import OtherResources from './component/Resources/OtherResources';
import RandomQuote from './component/Vocaburary/RandomQuote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faVial, faAddressBook, faPencilAlt, faGlasses } from '@fortawesome/free-solid-svg-icons'; 
import towerimgage from '../src/Picture/Background.jpg'; 
import miseimage from '../src/Picture/mise.jpg'; 
import Katakana from './component/JapaneseQuiz/katakana/Katakana';
import SavedQuotes from './component/Vocaburary/SavedQuotes';
import JapaneseQuiz from './component/JapaneseQuiz/JapaneseQuiz';
import Vocaburary from './component/Vocaburary/Vocaburary';

class App extends Component {  

  render () {

    return (
    
   <div>

   <Container fluid>
   <Navbar collapseOnSelect expand='md' bg="dark" variant="dark">
   <Navbar.Toggle />
   <Navbar.Collapse>
    <Nav id='navBar1' className='navBar' fill fluid>
    <Link className='nav-link' to='/'><FontAwesomeIcon icon={faIgloo} /> Home</Link>
    <NavDropdown title={<span><FontAwesomeIcon icon={faVial} /> Quiz</span>} id="nav-dropdown">
        <NavDropdown.Item eventKey="1.1"><Link to="/quiz/katakana">(Level 1) Katakana Test</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="1.2"><Link to="/quiz/test">(Level 2) Greetings</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="1.3"><Link to="/quiz/grammar">(Level 3) Grammar Practice</Link></NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title={<span><FontAwesomeIcon icon={faPencilAlt} /> Vocaburary</span>} id="nav-dropdown">
        <NavDropdown.Item  eventKey="2.1"><Link to='/vocaburary/quotes'>Quotes of Today</Link></NavDropdown.Item>
        <NavDropdown.Item  eventKey="2.2"><Link to="/vocaburary/vocabdiseases">Diseases</Link></NavDropdown.Item>
      </NavDropdown>
		<Link className='nav-link' to='/resources'><FontAwesomeIcon icon={faGlasses} /> Resources</Link> 
    <Link className='nav-link' to='/contactus'><FontAwesomeIcon icon={faAddressBook} /> Contact Us</Link>
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
  <Route path="/vocaburary" render={(props) => (
    <Banner  {...props} backgrounds={miseimage} />)}  />
  </Switch> 
  
  <Switch>
  <Route path="/" exact component={Home} />
  <Route path="/quiz/test" exact component={Test} /> 
  <Route path="/quiz/grammar" exact component={Grammar} /> 
  <Route path="/vocaburary/vocabdiseases" exact component={VocabDiseases} />
  <Route path="/resources" exact component={OtherResources} />  
  <Route path="/contactus" exact component={Contact} /> 
  <Route path="/vocaburary/quotes" exact component={RandomQuote} />
  <Route path="/quiz/katakana" exact component={Katakana} />
  <Route path="/savedquotes" exact component={SavedQuotes} />
  <Route path="/quiz" exact component={JapaneseQuiz} />
  <Route path="/vocaburary" exact component={Vocaburary} />
  </Switch> 

   </div>
    )}}
    
export default App;
