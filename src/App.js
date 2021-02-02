import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
import towerimgage from '../src/Picture/fuji.jpg'
import miseimage from '../src/Picture/mise.jpg'; 
import Katakana from './component/JapaneseQuiz/katakana/Katakana';
import SavedQuotes from './component/Vocabulary/SavedQuotes';
import JapaneseQuiz from './component/JapaneseQuiz/Test/JapaneseQuiz';
import Vocabulary from './component/Vocabulary/Vocabulary';
import Kanji from './component/Kanji/Kanji';
import Footer from './component/Home/Footer';
import NavBar from './component/Home/NavBar'

class App extends Component {  

  render () {

    return (
    
   <div>

  <NavBar />

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
  <Route path="/vocabulary" exact component={Vocabulary} />
  <Route path="/vocabulary/kanji"  component={Kanji} />  

  </Switch> 
  <Footer />
   </div>
    )}}
    
export default App;
