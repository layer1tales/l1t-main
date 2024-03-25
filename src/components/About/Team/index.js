import React, {useCallback, useRef} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";

import aboutLitLightBg from "assets/img/about/about-lit-light-bg.png";
import nextArrowIcon from "assets/img/general/next-arrow-icon.svg";
import prevArrowIcon from "assets/img/general/prev-arrow-icon.svg";

const teamData = [
    {
        link: 'https://www.linkedin.com/in/sotofrancois/',
        name: 'Francois S.',
        description: <>{`//`} Founder</>
    },
    {
        name: 'Sigita L.',
        description: <>{`//`} Lead Artist</>
    },
    {
        name: 'Nya H.',
        description: <>{`//`} Senior Artist</>
    },
    {
        name: 'Mario W.',
        description: <>{`//`} Artist</>
    },
    {
        name: 'Danna A.',
        description: <>{`//`} Artist</>
    },
    {
        name: 'Leonid C.',
        description: <>{`//`} 3D Modeler</>
    },
    {
        name: 'Justin Z.',
        description: <>{`//`} Creative Writer</>
    },
    {
        name: 'Samantha H.',
        description: <>{`//`} Creative Writer</>
    },
    {
        name: 'Nikun D.',
        description: <>{`//`} Creative Writer</>
    },
    {
        name: 'Robert C.',
        description: <>{`//`} Copy Editor</>
    },
    {
        name: 'Josie B.',
        description: <>{`//`} Beta Reader</>
    },
    {
        name: 'Ana H.',
        description: <>{`//`} Beta Reader</>
    },
    {
        name: 'Muhammad R.',
        description: <>{`//`} Graphic Designer</>
    },
    {
        name: 'Vsevolov K.',
        description: <>{`//`} Front-End Designer</>
    },
    {
        name: 'Andy M.',
        description: <>{`//`} Front-End Developer</>
    },
    {
        name: 'Silent S.',
        description: <>{`//`} Marketing</>
    }
]

const Team = () => {
    const teamSliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!teamSliderRef.current) return;
        teamSliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!teamSliderRef.current) return;
        teamSliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section id="about-team" className="about-team-section">
            <div className="bg-wrap">
                <div className="light-bg">
                    <img src={aboutLitLightBg} alt="Light Bg"/>
                </div>
            </div>
            <Container>
                <Row>
                    <Col xs={16}>
                        <div className="headline-wrap">
                            <h2 data-aos="fade-up" data-aos-delay="0">Our team</h2>
                            <p data-aos="fade-up" data-aos-delay="100">The L1T team brings together <span
                                className="pink">many rising talents from the art and crypto industries</span>. We
                                are proud to have one of the most cohesive artistic groups within the Solana ecosystem.
                            </p>
                        </div>
                    </Col>
                    <Col xs={16}>
                        {teamData ? (
                            <Swiper
                                className="team-swiper"
                                slidesPerView={4}
                                spaceBetween={0}
                                enabled={false}
                                preventInteractionOnTransition={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        enabled: true,
                                    },
                                    767: {
                                        slidesPerView: 3,
                                        spaceBetween: 0,
                                        enabled: false,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                        enabled: false,
                                        preventInteractionOnTransition: true,
                                    }
                                }}
                                ref={teamSliderRef}
                            >
                                {teamData?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <a href={item?.link || null} target={item?.link ? '_blank' : null}
                                           rel="noreferrer" data-aos="fade-up" data-aos-delay={50 * index}>
                                            <h4>{item?.name}</h4>
                                            <p>{item?.description}</p>
                                        </a>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-button-prev" onClick={handlePrev}>
                                    <img src={prevArrowIcon} alt="Prev Icon"/>
                                </div>
                                <div className="swiper-button-next" onClick={handleNext}>
                                    <img src={nextArrowIcon} alt="Next Icon"/>
                                </div>
                            </Swiper>
                        ) : null}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Team;
