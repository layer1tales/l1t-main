import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import artHeroArtifacts from "assets/img/art/art-hero-artifacts.svg";
import artHeroImg from "assets/img/art/art-hero-img.png";
import iconRoundScroll from "assets/img/general/icon-round-scroll.svg";

const Hero = () => {
    return (
        <section id="art-hero" className="art-hero-section">
            <div className="artifacts-wrap">
                <img src={artHeroArtifacts} alt="Artifacts"/>
            </div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="img-wrap">
                            <img src={artHeroImg} alt="Art Hero" data-aos="fade-down" data-aos-delay="1100"/>
                        </div>
                        <div className="scroll-wrap" data-aos="fade-up" data-aos-delay="1200">
                            <img src={iconRoundScroll} alt="Scroll"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;
