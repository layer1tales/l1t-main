import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import loreCoverChapterOne from "assets/img/lore/lore-chapter-1-cover.jpg";
import iconRoundScroll from "assets/img/general/icon-round-scroll.svg";

const Cover = ({ data }) => {
    const defautData = {
        id: 0,
        title: 'No title',
        cover: loreCoverChapterOne
    }

    const { id, title, cover } = data || defautData;

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
                            <div className="scroll-wrap" data-aos="fade-up" data-aos-delay="1200">
                                <span>
                                    <img src={iconRoundScroll} alt="Scroll"/>
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Cover;
