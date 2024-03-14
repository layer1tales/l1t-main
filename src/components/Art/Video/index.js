import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import artVideoArtifacts from "assets/img/art/art-video-artifacts.svg";
import artVideoCover from "assets/img/art/art-video-cover.png";
import artVideoPlayIcon from "assets/img/art/art-video-play-icon.svg";

const Video = () => {
    return (
        <section id="art-video" className="art-video-section">
            <div className="artifacts-wrap">
                <img src={artVideoArtifacts} alt="Artifacts"/>
            </div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="video-wrap" data-aos="fade-up" data-aos-delay="0">
                            <div className="cover">
                                <img src={artVideoCover} alt="Video Cover"/>
                            </div>
                            <div className="mask">
                                <div className="text-wrap">
                                    <h2>Watch</h2>
                                    <div className="play-wrap">
                                        <img src={artVideoPlayIcon} alt="Play"/>
                                    </div>
                                    <h2>Video</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Video;
