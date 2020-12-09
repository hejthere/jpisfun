import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home' 
import Test from './component/Test/Test'
import './index.css'; 
import './App.css';
import Grammar from './component/Grammar/Grammar';
import Contact from './component/Contact/Contact'
import Banner from './component/Home/Banner'
import VocabDiseases from './component/Vocaburary/VocabDiseases';
import OtherResources from './Resources/OtherResources';
import RandomQuote from './component/Vocaburary/RandomQuote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faVial, faAddressBook, faPencilAlt, faGlasses } from '@fortawesome/free-solid-svg-icons'; 
import towerimgage from '../src/Picture/Background.jpg'; 
import miseimage from '../src/Picture/mise.jpg'; 

class App extends Component {
  state= {
  pathname: '',
  }


changePageHandler =()=> {
    this.setState({pathname: window.location.pathname})
    console.log(this)
}


  render () {
  
  //  let bannertext =''; 
  //   switch (window.location.pathname) {
  //     case '/jpisfun': bannertext = <Bannerword title="ようこそ"></Bannerword>
  //       break;
  //     case'/jpisfun/test': bannertext = <Bannerword title="Test Your Knowledge"></Bannerword>
  //       break;
  //     case'/jpisfun/resources': bannertext = <Bannerword title="Resources"></Bannerword>
  //       break;
  //     case'/jpisfun/grammar': bannertext = <Bannerword title="Grammar Practice"></Bannerword>
  //       break;
  //     case'/jpisfun/contactus': bannertext = <Bannerword title="Contact Us"></Bannerword>
  //       break;
  //     default: bannertext =<Bannerword title="ようこそ"></Bannerword>
  //       break;
  //   }
   


  let bannerimg =''; 
     switch (this.state.pathname) {
       case '/jpisfun': bannerimg = <Banner backgrounds={towerimgage}></Banner>
         break;
       case'/jpisfun/test': bannerimg = <Banner backgrounds={miseimage}></Banner>
         break;
       case'/jpisfun/resources': bannerimg = <Banner backgrounds={miseimage}></Banner>
         break;
       case'/jpisfun/grammar': bannerimg = <Banner backgrounds={miseimage}></Banner>
         break;
       case'/jpisfun/contactus': bannerimg = <Banner backgrounds={miseimage}></Banner>
         break;
       default: bannerimg =<Banner backgrounds={towerimgage}></Banner>
         break;
     }

    return (
   <div>
   <header> 
     <nav className="navbar">
		<ul> 
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'var(--yellow)'}}to='/' exact onClick={this.changePageHandler}><FontAwesomeIcon icon={faIgloo} /> Home</NavLink> </li>
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'var(--yellow)'}}to='/test' onClick={this.changePageHandler}><FontAwesomeIcon icon={faVial} /> Test Your Knowledge</NavLink></li>  
    <li> <NavLink activeClassName='is-active' activeStyle={{color:'var(--yellow)'}}to='/grammar' onClick={this.changePageHandler}><FontAwesomeIcon icon={faPencilAlt} /> Grammar Practice</NavLink> </li>
		<li> <NavLink activeClassName='is-active' activeStyle={{color:'var(--yellow)'}}to='/resources' onClick={this.changePageHandler}><FontAwesomeIcon icon={faGlasses} /> Resources</NavLink>  </li>
    <li> <NavLink activeClassName='is-active' activeStyle={{color:'var(--yellow)'}}to='/contactus' onClick={this.changePageHandler}><FontAwesomeIcon icon={faAddressBook} /> Contact Us</NavLink> </li>
		</ul>
     </nav>
   </header>

  {bannerimg}
  
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
