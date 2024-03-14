import React, {useRef, useCallback} from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';

import artCollectionItemOne from "assets/img/art/art-collection-item-1.png";
import artCollectionItemTwo from "assets/img/art/art-collection-item-2.png";
import artCollectionItemThree from "assets/img/art/art-collection-item-3.png";
import prevArrowIcon from "assets/img/general/prev-arrow-icon.svg";
import nextArrowIcon from "assets/img/general/next-arrow-icon.svg";
import {ReactComponent as AboutHeroBtnBg} from "assets/img/about/about-hero-btn-bg.svg";

const Collection = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section id="art-collection" className="art-collection-section">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="text-wrap">
                            <h2 data-aos="fade-down" data-aos-delay="0">Take a look<br/> at our nft collection</h2>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <Swiper
                            className="art-collection-swiper"
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 16,
                                },
                                767: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                1199: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                }
                            }}
                            ref={sliderRef}
                        >
                            <SwiperSlide>
                                <div className="img-wrap">
                                    <img src={artCollectionItemOne} alt="Item 1"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="img-wrap">
                                    <img src={artCollectionItemTwo} alt="Item 2"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="img-wrap">
                                    <img src={artCollectionItemThree} alt="Item 3"/>
                                </div>
                            </SwiperSlide>
                            <div className="swiper-button-next" onClick={handleNext}>
                                <img src={nextArrowIcon} alt="Next Icon"/>
                            </div>
                            <div className="swiper-button-prev" onClick={handlePrev}>
                                <img src={prevArrowIcon} alt="Prev Icon"/>
                            </div>
                            <div className="btn-wrap">
                                <Link to="/collection">
                                    <span className="text">EXPLORE COLLECTION</span>
                                    <span className="bg">
                                        <AboutHeroBtnBg/>
                                    </span>
                                </Link>
                            </div>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Collection;
