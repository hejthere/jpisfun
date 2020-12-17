import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Home from './component/Home/Home' 
import Test from './component/Test/Test'
import './index.css'; 
import './App.css';
import Grammar from './component/Grammar/Grammar';
import Contact from './component/Contact/Contact'
import Banner from './component/Home/Banner'
import VocabDiseases from './component/Home/VocabDiseases';
import OtherResources from './Resources/OtherResources';
import RandomQuote from './component/Vocaburary/RandomQuote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faVial, faAddressBook, faPencilAlt, faGlasses } from '@fortawesome/free-solid-svg-icons'; 
import towerimgage from '../src/Picture/Background.jpg'; 
import miseimage from '../src/Picture/mise.jpg'; 
import Katakana from './component/Home/Katakana';

class App extends Component {
  state= {
  pathname: window.location.pathname,
  }


  render () {

    return (
   <div>

   <Container fluid>
   <Navbar sticky expand='md' bg="dark" variant="dark">
   <Navbar.Toggle/>
   <Navbar.Collapse> 
     <Nav className='navBar' fill fluid>
		 <Nav.Item><Nav.Link href="/jpisfun" ><FontAwesomeIcon icon={faIgloo} /> Home</Nav.Link> </Nav.Item>
		 <Nav.Item><Nav.Link href="/jpisfun/test"><FontAwesomeIcon icon={faVial} /> Test Your Knowledge</Nav.Link></Nav.Item>
     <Nav.Item><Nav.Link href="/jpisfun/grammar"><FontAwesomeIcon icon={faPencilAlt} /> Grammar Practice</Nav.Link></Nav.Item>
		 <Nav.Item><Nav.Link href="/jpisfun/resources"><FontAwesomeIcon icon={faGlasses} /> Resources</Nav.Link> </Nav.Item>
     <Nav.Item><Nav.Link href="/jpisfun/contactus"><FontAwesomeIcon icon={faAddressBook} /> Contact Us</Nav.Link></Nav.Item>
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
  </Switch> 

   </div>
    )}}
    
export default App;