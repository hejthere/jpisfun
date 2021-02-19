import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Home from './component/Home/Home'
import NavBar from './component/Home/NavBar';
import Banner from './component/Home/Banner'
import Jptest from './component/JapaneseQuiz/JpTest/Jptest'
import Grammar from './component/JapaneseQuiz/Grammar/Grammar';
import VocabDiseases from './component/Vocabulary/VocabDiseases/VocabDiseases';
import OtherResources from './component/Resources/OtherResources';
import RandomQuote from './component/Vocabulary/RandomQuotes/RandomQuote';
import Katakana from './component/JapaneseQuiz/Katakana/Katakana';
import SavedQuotes from './component/Vocabulary/RandomQuotes/SavedQuotes';
import JapaneseQuiz from './component/JapaneseQuiz/JapaneseQuiz';
import Vocabulary from './component/Vocabulary/Vocabulary';
import Kanji from './component/Vocabulary/Kanji/Kanji';
import Footer from './component/Home/Footer';
import Contact from './component/Contact/Contact';
import towerimgage from '../src/Picture/fuji.jpg'
import miseimage from '../src/Picture/mise.jpg';

class App extends Component {

  componentDidMount() {
    document.title = "Hejthere"
  }

  render() {

    return (

      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact render={(props) => (
            <Banner  {...props} backgrounds={towerimgage} />)} />
          <Route render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
        </Switch>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quiz" component={JapaneseQuiz} />
          <Route path="/quiz/jptest" component={Jptest} />
          <Route path="/quiz/grammar" component={Grammar} />
          <Route path="/quiz/katakana" component={Katakana} />

          <Route path="/vocabulary" exact component={Vocabulary} />
          <Route path="/vocabulary/quotes" component={RandomQuote} />
          <Route path="/vocabulary/vocabdiseases" component={VocabDiseases} />
          <Route path="/vocabulary/savedquotes" component={SavedQuotes} />
          <Route path="/vocabulary/kanji" component={Kanji} />

          <Route path="/resources" component={OtherResources} />
          <Route path="/contactus" component={Contact} />

          {/* default */}
          <Route component={Home} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
