import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Background from './Picture/Background.jpg'
import Home from './component/Home/Home' 
import Test from './component/Test/Test'
import './index.css'; 
import Grammar from './component/Grammar/Grammar';
import Contact from './component/Contact/Contact'
import Bannerword from './component/Home/Bannerword';


class App extends Component {
  render () {

   let bannertext =''; 
    switch (window.location.pathname) {
      case '/': bannertext = <Bannerword title="ようこそ"></Bannerword>
        break;
      case'/test': bannertext = <Bannerword title="Test Your Knowledge"></Bannerword>
        break;
      case'/vocaburary': bannertext = <Bannerword title="Vocaburary"></Bannerword>
        break;
      case'/grammar': bannertext = <Bannerword title="Grammar Practice"></Bannerword>
        break;
      case'/contactus': bannertext = <Bannerword title="Contact Us"></Bannerword>
        break;
      default:bannertext =<Bannerword title="ようこそ"></Bannerword>
        break;
    }


    return (
   <div>
   <header> 
     <nav className="navbar">
		<ul> 
		<li > <NavLink activeClassName='is-active' activeStyle={{color:'black'}}to='/' exact>Home</NavLink> </li>
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'black'}}to='/test' >Test Your Knowledge</NavLink></li>  
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'black'}}to='/vocaburary' >Vocaburary</NavLink>  </li>
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'black'}}to='/grammar'>Grammar Practice</NavLink> </li>
    <li> <NavLink activeClassName='is-active' activeStyle={{color:'black'}}to='/contactus'>Contact Us</NavLink> </li>
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
  <Route path ="/contactus" exact component={Contact} /> 
  </Switch> 

   </div>
    )}}
    
export default App;
