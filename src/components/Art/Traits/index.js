import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import artTraitsImg from "assets/img/art/art-traits-img.png";

const Traits = () => {
    return (
        <section id="art-traits" className="art-traits-section">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="text-wrap">
                            <h2 data-aos="fade-down" data-aos-delay="0">More then 150<br/> carefully curated traits</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="img-wrap">
                <img src={artTraitsImg} alt="Traits"/>
            </div>
        </section>
    )
}

export default Traits;
