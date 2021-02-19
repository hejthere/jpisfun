import React, { Component } from 'react';
import sickguy from '../../../Picture/sickguy.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

class VocabDiseases extends Component {

    render() {


        return (

            <Container fluid="true">
                <Row><h3 className="title-bar bg-red">Learn Vocabulary: Diseases</h3></Row>
                <Image fluid="true" src={sickguy} alt='sickguy' />


            </Container>
        )

    }
}

export default VocabDiseases; 