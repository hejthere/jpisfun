import React from 'react';
import Greeting from '../../Picture/greeting.png'
import food from '../../Picture/food.png'
import disease from '../../Picture/disease.png'
import fuji from '../../Picture/fuji.png'
import daruma from '../../Picture/daruma.png'
import './home.css'

const home = props => {

return (
<div>
<section className="menu"> 
<div className="col-4 greetings" style={{ backgroundColor:'#496D89'}} >
	<a  className="picturelink" href='./test'>
		<img className="subpagelink" src={Greeting} alt='greeting' /> <p className="subpagelinkword"> &nbsp; Greetings </p> </a>
 </div>
 <div className="col-4 diseases" style={{ backgroundColor:'#ffcc00'}}>
	<a className="picturelink" href='/VocabDiseases'>
		<img className="subpagelink" src ={disease} alt='disease'/> <p className="subpagelinkword"> &nbsp; Diseases </p></a>
 </div>
<div className="col-4 food" style={{ backgroundColor:'#aa5939'}}> 
	<a  className="picturelink" href='/'>
		<img src ={food} className="subpagelink" alt='food' /> <p className="subpagelinkword"> &nbsp; Food </p> </a>
</div>
</section>

{/* / <!-- Introduction --> // */}
<div className="simple-introduction">
<img src={fuji} alt="FujiMountain" data-aos="fade-in" data-aos-delay="300" />
<div>
<h2> For Japanese Beginners </h2>
<span> You could learn some basic Japanese Vocaburary and Grammar Practice in this website.</span><br />
<br /><button >MORE</button>
</div>
</div> 

{/* /* <!-- Japanese Vocab --> */ }

<div className="homepage-japan-vocab">
	<div>
	<h2> Japanese Vocaburary </h2>
	<span> Learn Daily Japanese Vocaburary with Exercise and Audio. </span><br/><br/>
	<button >MORE</button>
	</div>
	<img src={daruma} alt="Daruma" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" />
	</div> 

     </div>   

    );


};

export default home; 
