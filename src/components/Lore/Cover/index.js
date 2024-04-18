import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import loreCoverChapterOne from "assets/img/lore/lore-chapter-1-cover.jpg";
import iconRoundScroll from "assets/img/general/icon-round-scroll.svg";
import iconPlayAudio from "assets/img/general/icon-play-audio.svg";

const Cover = ({data, isAudioPlayerActive, setIsAudioPlayerActive}) => {
    const defaultData = {
        id: 0,
        title: 'No title',
        cover: loreCoverChapterOne
    }

    const {id, title, cover, audio} = data || defaultData;

    return (
        <section id="lore-cover" className="lore-cover-section">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="cover-wrap">
                            <img src={cover} alt="Cover"/>
                        </div>
                        <div className="text-wrap">
                            <p data-aos="fade-down" data-aos-delay="1000">Chapter {id}</p>
                            <h1 data-aos="fade-down" data-aos-delay="1100">{title}</h1>
                            {audio ? (
                                <div className={`play-audio-wrap ${isAudioPlayerActive ? 'play-audio-hide' : ''}`}
                                     data-aos="fade-up" data-aos-delay="1200" onClick={() => setIsAudioPlayerActive(true)}>
                                    <span>
                                        <img src={iconPlayAudio} alt="Play Audio"/>
                                    </span>
                                    <span>
                                        <p>LISTEN AUDIO VERSION</p>
                                    </span>
                                </div>
                            ) : (
                                <div className="scroll-wrap" data-aos="fade-up" data-aos-delay="1200">
                                    <span>
                                        <img src={iconRoundScroll} alt="Scroll"/>
                                    </span>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Cover;
