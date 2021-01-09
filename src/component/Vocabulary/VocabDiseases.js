import React, {Component} from 'react';
import sickguy from '../../Picture/sickguy.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

class VocabDiseases extends Component { 

render (){


return ( 

<Container fluid>
<Row><h2 className="saved-Quotes-title">Learn Vocabulary: Diseases</h2></Row>
<Image fluid src={sickguy} alt='sickguy' />


</Container>
)

}}

export default VocabDiseases; 