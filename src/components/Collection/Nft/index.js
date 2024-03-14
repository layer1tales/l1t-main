import React, {useRef, useCallback} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';

import artCollectionItemOne from "assets/img/art/art-collection-item-4.png";
import artCollectionItemTwo from "assets/img/art/art-collection-item-5.png";
import artCollectionItemThree from "assets/img/art/art-collection-item-6.png";
import artCollectionItemFour from "assets/img/art/art-collection-item-7.png";
import artCollectionItemFive from "assets/img/art/art-collection-item-8.png";
import prevArrowIcon from "assets/img/general/prev-arrow-icon.svg";
import nextArrowIcon from "assets/img/general/next-arrow-icon.svg";

const Nft = () => {
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
        <section id="collection-nft" className="collection-nft-section">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="text-wrap">
                            <h2 data-aos="fade-down" data-aos-delay="0">Our collection</h2>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <Swiper
                            className="collection-nft-swiper"
                            slidesPerView={1}
                            spaceBetween={0}
                            initialSlide={2}
                            centeredSlides={true}
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
                                    <img src={artCollectionItemFour} alt="Item 0"/>
                                </div>
                            </SwiperSlide>
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
                            <SwiperSlide>
                                <div className="img-wrap">
                                    <img src={artCollectionItemFive} alt="Item 4"/>
                                </div>
                            </SwiperSlide>
                            <div className="swiper-button-next" onClick={handleNext}>
                                <img src={nextArrowIcon} alt="Next Icon"/>
                            </div>
                            <div className="swiper-button-prev" onClick={handlePrev}>
                                <img src={prevArrowIcon} alt="Prev Icon"/>
                            </div>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Nft;
