import React, { Component } from 'react'; 
import './Grammar.css'



class Grammar extends Component { 

// componentDidMount () {
//         const script = document.createElement("script");
//         script.src = './RSS.js';
//         script.async = true;
//         document.body.appendChild(script);
//     }


showAnswerHandler =(event)=> event.target.style.opacity='1';


showTranslationHandler =()=> {
    const translationdiv = document.getElementById('translation');
    console.log(translationdiv);
    translationdiv.textContent ='Momo-taro is a boy who was born from a peach. To save the villagers, he started a journey to fight against the Demons. It is a story about how Momo-taro and the animals friends he met on his way defeated the Demons.'; 
    translationdiv.style.fontSize = '1.5rem';
}

// readOutLoudHandler =()=> {
//     VoiceRSS.speech({
//         key:'00ae74bcb9584b048364d0b930dfff93',
//        //how to put source like <p> in it ? //
//         src: '桃からうまれたももたろうというおとこのこは、村の人たちをたすけるためにおにたいじに向かいます。道中でどうぶつたちとであい、なかまとなり、ともに鬼たいじにいどむお話です。',
//         hl: 'ja-jp',
//         v: 'Fumi',
//         r: -4, 
//         c: 'mp3',
//         f: '44khz_16bit_stereo',
//         ssml: false
        
//     }); 
// }

 
render () {

return (
<div >
    <p className='description'>
    Do you know which particle should be used in the following article ?
    Click the space to view the answer. </p><br />

<div id='momotaro' >
    桃から生まれた桃太郎(<span onClick={this.showAnswerHandler} className="hiddenword">と</span>)いう男の子は、<br />村の人たち(<span onClick={this.showAnswerHandler} className="hiddenword">を</span>)助けるため(<span onClick={this.showAnswerHandler} className="hiddenword">に</span>)鬼退治に向かいます。<br />道中で動物たち(<span onClick={this.showAnswerHandler} className="hiddenword">と</span>)出会い、仲間となり、<br />共に鬼退治に挑むお話です。
</div>


<button onClick={this.readOutLoudHandler}>Listen</button>
{/* <audio hidden controls></audio> */}
{/* <script src="External_file/voiceRSS.js"></script>  */}
<button onClick={this.showTranslationHandler}>See Translation</button> 
<div id='translation'></div>

</div>

)}
}


export default Grammar; 
