import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Background from './Picture/Background.jpg'
import Home from './component/Home/Home' 
import Test from './component/Test/Test'
import './index.css'; 
import './App.css';
import Grammar from './component/Grammar/Grammar';
import Contact from './component/Contact/Contact'
import Bannerword from './component/Home/Bannerword';
import VocabDiseases from './component/Vocaburary/VocabDiseases';
import OtherResources from './Resources/OtherResources';
import RandomQuote from './component/Vocaburary/RandomQuote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faVial, faAddressBook, faPencilAlt, faGlasses } from '@fortawesome/free-solid-svg-icons'; 

class App extends Component {
  
  render () {
  
   let bannertext =''; 
    switch (window.location.pathname) {
      case '/jpisfun': bannertext = <Bannerword title="ようこそ"></Bannerword>
        break;
      case'/jpisfun/test': bannertext = <Bannerword title="Test Your Knowledge"></Bannerword>
        break;
      case'/jpisfun/resources': bannertext = <Bannerword title="Resources"></Bannerword>
        break;
      case'/jpisfun/grammar': bannertext = <Bannerword title="Grammar Practice"></Bannerword>
        break;
      case'/jpisfun/contactus': bannertext = <Bannerword title="Contact Us"></Bannerword>
        break;
      default: bannertext =<Bannerword title="ようこそ"></Bannerword>
        break;
    }


    return (
   <div>
   <header> 
     <nav className="navbar">
		<ul> 
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'black'}}to='/' exact><FontAwesomeIcon icon={faIgloo} /> Home</NavLink> </li>
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'black'}}to='/test' ><FontAwesomeIcon icon={faVial} /> Test Your Knowledge</NavLink></li>  
    <li> <NavLink activeClassName='is-active' activeStyle={{color:'black'}}to='/grammar'><FontAwesomeIcon icon={faPencilAlt} /> Grammar Practice</NavLink> </li>
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'black'}}to='/resources'><FontAwesomeIcon icon={faGlasses} /> Resources</NavLink>  </li>
    <li> <NavLink activeClassName='is-active' activeStyle={{color:'black'}}to='/contactus'><FontAwesomeIcon icon={faAddressBook} /> Contact Us</NavLink> </li>
		</ul>
     </nav>
   </header>

  <div className="bannerContainer"> 
  <img className="banner" src={Background} alt='background' />  
  {bannertext}  
   </div>
  
  <Switch>
  <Route path="/" exact component={Home} />
  <Route path="/test" exact component={Test} /> 
  <Route path="/grammar" exact component={Grammar} /> 
  <Route path="/vocabdiseases" exact component={VocabDiseases} />
  <Route path="/resources" exact component={OtherResources} />  
  <Route path="/contactus" exact component={Contact} /> 
  <Route path="/quotes" exact component={RandomQuote} />
  </Switch> 

   </div>
    )}}
    
export default App;
