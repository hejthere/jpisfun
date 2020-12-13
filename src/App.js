import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
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
import Katakana from './component/Home/Katakana'

class App extends Component {
  state= {
  pathname: window.location.pathname,
  }


  render () {

    return (
   <div>
   <header> 
     <nav className="navbar">
		<ul> 
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'var(--yellow)'}}to='/' exact ><FontAwesomeIcon icon={faIgloo} /> Home</NavLink> </li>
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'var(--yellow)'}}to='/test' ><FontAwesomeIcon icon={faVial} /> Test Your Knowledge</NavLink></li>  
    <li> <NavLink activeClassName='is-active' activeStyle={{color:'var(--yellow)'}}to='/grammar' ><FontAwesomeIcon icon={faPencilAlt} /> Grammar Practice</NavLink> </li>
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'var(--yellow)'}}to='/resources' ><FontAwesomeIcon icon={faGlasses} /> Resources</NavLink>  </li>
    <li> <NavLink activeClassName='is-active' activeStyle={{color:'var(--yellow)'}}to='/contactus' ><FontAwesomeIcon icon={faAddressBook} /> Contact Us</NavLink> </li>
		</ul>
     </nav>
   </header>

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
