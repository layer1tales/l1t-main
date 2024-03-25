import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import artVideoArtifacts from "assets/img/art/art-video-artifacts.svg";
import artVideoCover from "assets/img/art/collection-video-cover.png";
import artVideoPlayIcon from "assets/img/art/art-video-play-icon.svg";

const Video = () => {
    return (
        <section id="collection-video" className="collection-video-section">
            <div className="artifacts-wrap">
                <img src={artVideoArtifacts} alt="Artifacts"/>
            </div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="text-wrap">
                            <h2 data-aos="fade-down" data-aos-delay="0">Our Artist</h2>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <a href="https://www.youtube.com/shorts/pqPdPsAULM8" target="_blank" rel="noreferrer"
                           className="video-wrap" data-aos="fade-up" data-aos-delay="0">
                            <div className="cover">
                                <img src={artVideoCover} alt="Video Cover"/>
                            </div>
                            <div className="mask">
                                <div className="play-wrap">
                                    <img src={artVideoPlayIcon} alt="Play"/>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Video;
