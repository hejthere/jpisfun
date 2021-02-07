import React, { Component } from 'react';
import sickguy from '../../../Picture/sickguy.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

class VocabDiseases extends Component {

    render() {


        return (

            <Container fluid="true">
                <Row><h2 className="diseases-title">Learn Vocabulary: Diseases</h2></Row>
                <Image fluid="true" src={sickguy} alt='sickguy' />


            </Container>
        )

    }
}

export default VocabDiseases; 