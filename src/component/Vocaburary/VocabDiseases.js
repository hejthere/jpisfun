import React, {Component} from 'react';
import sickguy from '../../Picture/sickguy.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

class VocabDiseases extends Component { 
state ={ 
    result: ''
}

componentDidMount() {
axios.get('https://jisho.org/api/v1/search/words?keyword=house')
    .then(response => {
        const data = response.data.slice(0,1);     
        console.log(data);
    // this.setState({result:data});
    }) 
    .catch(error =>{
console.log(error);
    } )
};

render (){


return ( 

<Container fluid>
<Row><h2 className="saved-Quotes-title">Learn Vocaburary: Diseases</h2></Row>
<Image fluid src={sickguy} alt='sickguy' />
<p>{this.state.result}</p>


</Container>
)

}}

export default VocabDiseases; 