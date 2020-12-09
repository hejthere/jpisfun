import React, { Component } from 'react';
import './randomQuote.css';

class RandomQuote extends Component { 

state = { 
quotes: [ 
{ id:'1', japanese:'辛くても耐えて、機会を待つんだよ。 ' , english: 'So please endure and wait for an opportunity to leave, even though it is tough!' , author:'ハクｰ千と千尋の神隠し'},
{ id:'2', japanese:'自分の中に原石を見つけて、時間をかけて磨くことだよ' , english: 'Once you’ve found your gems you have to polish them.' , author:'西司郎ｰ耳をすませば'},
{ id:'3', japanese:'飛べねぇ豚はただの豚だ。' , english: 'A pig that doesn’t fly is nothing but the grounded pork.' , author:'マルコｰ紅の豚'},
{ id:'4', japanese:'徹夜はするな。睡眠不足はいい仕事の敵だ。美容にも良くないぜ。' , english: 'Don’t stay up all night. Insufficient sleep will keep you from doing a good job. And it doesn’t help your looks.' , author:'マルコ-紅の豚'},
{ id:'5', japanese:'事を急ぐと元も子もなくしますよ。' , english: 'In your haste, you risk everything.' , author:'ムスカ-天空の城ラピュタ'},
{ id:'6', japanese:'そんなに形にこだわらないの。大切なのは心よ。' , english: 'It’s not really important what color your dress is. What matters is the heart inside.' , author:'キキ母ｰ魔女の宅急便'},
{ id:'7', japanese:'初めから完璧なんで期待してはいけない !' , english: 'Don’t expect perfection at first.' , author:'西司郎ｰ耳をすませば'},
{ id:'8', japanese:'生きてりゃ何とかなる' , english: 'As long as we’re alive, we’ll manage.' , author:'トキ-もののけ姫'},
{ id:'9', japanese:'僕はもう十分逃げた。ようやく守らなければならないものが分かったんだんだ。君だ。　' , english: 'I’m through running away. I’ve finally found someone I want to protect…YOU.' , author:'ハウル-ハウルの動く城'},
{ id:'10', japanese:'生きてりゃ何とかなる' , english: 'As long as we’re alive, we’ll manage.' , author:'トキ-もののけ姫'}]
,
generatedQuote: {id:'', japanese:'Get Your Quotes of Today' , english: '' , author:''}
}

generateQuoteHandler =()=> {
    let randomNumber = Math.floor(Math.random()*10);
    let selectedquote = this.state.quotes[randomNumber];
    let updatedQuote = { 
        ...this.state.generatedQuote
    }
    updatedQuote = selectedquote;
    this.setState( 
    { generatedQuote: updatedQuote }); 
    console.log(this.state.generatedQuote)
    }

render() {


return( 
<div> 
<div class='quotebox'> 
<p class='japanesequote'>{this.state.generatedQuote.japanese}</p>
<p class='englishquote'>{this.state.generatedQuote.english}</p>
<br/>
<p class='authorquote'>{this.state.generatedQuote.author}</p>
</div>
<br /> 
<button onClick={this.generateQuoteHandler}>Start</button> 
<button>Save Quote</button>
<br/> 
<br/>
</div>

)

}

}

export default RandomQuote; 