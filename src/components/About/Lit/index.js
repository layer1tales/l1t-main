import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import aboutLitEmojiOne from "assets/img/about/about-lit-emoji-1.png";
import aboutLitEmojiTwo from "assets/img/about/about-lit-emoji-2.png";
import aboutLitEmojiThree from "assets/img/about/about-lit-emoji-3.png";
import aboutLitLightBg from "assets/img/about/about-lit-light-bg.png";

const Lit = () => {

    return (
        <section id="about-lit" className="about-lit-section">
            <div className="bg-wrap"></div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="text-wrap">
                            <h2 data-aos="fade-up" data-aos-delay="0">LIT:
                                <span className="emoji"><img src={aboutLitEmojiOne} alt="Emoji"/></span>A term used to
                                describe<br/>
                                <span className="pink">something cool</span><span className="emoji"><img
                                    src={aboutLitEmojiTwo} alt="Emoji"/></span><span
                                    className="pink">and exciting</span>,<br/>or generally something<br/>
                                <span className="pink">you want to</span><span className="emoji"><img
                                    src={aboutLitEmojiThree} alt="Emoji"/></span><span
                                    className="pink">experience</span>.
                                <span className="light-bg">
                                    <img src={aboutLitLightBg} alt="Light Bg"/>
                                </span>
                            </h2>
                            <p data-aos="fade-up" data-aos-delay="100">L1T is the L33tspeak version of LIT.<br/>
                                L1, for Layer 1, refers to blockchains.<br/>
                                T, for Tales, refers to adventures.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Lit;
