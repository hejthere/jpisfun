import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
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
import OtherResources from './component/Resources/OtherResources';
import RandomQuote from './component/Vocaburary/RandomQuote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faVial, faAddressBook, faPencilAlt, faGlasses } from '@fortawesome/free-solid-svg-icons'; 
import towerimgage from '../src/Picture/Background.jpg'; 
import miseimage from '../src/Picture/mise.jpg'; 
import Katakana from './component/Home/Katakana';

class App extends Component {

  NavButtonHandler =()=> { 
      var navBar =  document.getElementById('navBar');
      if (navBar.style.display === "block"){ 
        navBar.style.display = "none";
      };
      if (navBar.style.display === "none"){ 
        navBar.style.display = "block";
      };
    }
  
    CollapseHandler =()=> { 
      var navBar =  document.getElementById('navBar'); 
      navBar.style.display = "none";
      }
  


  render () {

    return (

   <div>

   <Container fluid>
   <Navbar expand='md' bg="dark" variant="dark">
   <Navbar.Toggle onClick={this.NavButtonHandler} />
   <Navbar.Collapse >
    <Nav  id='navBar' className='navBar' fill fluid>
    <Link onClick={this.CollapseHandler} className='nav-link' to='/'><FontAwesomeIcon icon={faIgloo} /> Home</Link> 
		<Link onClick={this.CollapseHandler} className='nav-link' to='/test'><FontAwesomeIcon icon={faVial} /> Test Your Knowledge</Link>
    <Link onClick={this.CollapseHandler} className='nav-link' to='/grammar'><FontAwesomeIcon icon={faPencilAlt} /> Grammar Practice</Link>
		<Link onClick={this.CollapseHandler} className='nav-link' to='/resources'><FontAwesomeIcon icon={faGlasses} /> Resources</Link> 
    <Link onClick={this.CollapseHandler} className='nav-link' to='/contactus'><FontAwesomeIcon icon={faAddressBook} /> Contact Us</Link>
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
