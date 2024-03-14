import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import aboutLearnGlyphVideo from "assets/img/about/about-learn-glyph-video.webm";
import aboutLearnGlyphVideoMobile from "assets/img/about/about-learn-glyph-video-mobile.mov";

import {ReactComponent as AboutHeroBtnBg} from "assets/img/about/about-hero-btn-bg.svg";

const Learn = () => {

    return (
        <section id="about-learn" className="about-learn-section">
            <Container>
                <Row>
                    <Col xs={12} lg={6} xl={7}>
                        <div className="img-wrap" data-aos="fade-up" data-aos-delay="300">
                            <div className="video-desktop">
                                <video preload="true" muted loop playsInline autoPlay>
                                    <source src={aboutLearnGlyphVideo} type="video/mp4"/>
                                </video>
                            </div>
                            <div className="video-mobile">
                                <video preload="true" muted loop playsInline autoPlay>
                                    <source src={aboutLearnGlyphVideoMobile} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} xl={5}>
                        <div className="text-wrap">
                            <h2 data-aos="fade-up" data-aos-delay="0">Tome 1: <br/>World of <br/>Solana</h2>
                            <p data-aos="fade-up" data-aos-delay="100">In a near future, the world is undergoing a digital renaissance. Not everyone thinks this innovation is a good idea. <span className="pink">Solana and Ethereum are teaming up to decentralize and destabilize a common enemy</span>: the government.</p>
                            <a href="/lore/1" data-aos="fade-up" data-aos-delay="200">
                                <span className="text">Read lore</span>
                                <span className="bg">
                                    <AboutHeroBtnBg/>
                                </span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Learn;
