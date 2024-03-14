import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from 'swiper';
import {useMediaQuery} from "react-responsive";
import {Link, useLocation} from "react-router-dom";

import {ReactComponent as AboutHeroBtnBg} from "assets/img/about/about-hero-btn-bg.svg";
import aboutHeroBg from "assets/img/about/about-hero-bg.png";
import aboutHeroPalms from "assets/img/about/about-hero-palms.png";
import aboutHeroGround from "assets/img/about/about-hero-ground.png";
import aboutHeroParticlesLeftOne from "assets/img/about/about-hero-particles-left-1.png";
import aboutHeroParticlesRightOne from "assets/img/about/about-hero-particles-right-2.png";
import aboutHeroParticlesLeftTwo from "assets/img/about/about-hero-particles-left-2.png";
import aboutHeroParticlesRightTwo from "assets/img/about/about-hero-particles-right-2.png";
import iconRoundScroll from "assets/img/general/icon-round-scroll.svg";

const Hero = () => {
    const [heroSwiper, setHeroSwiper] = useState(null);
    const {pathname} = useLocation();
    const isAboutPage = useMemo(() => pathname === '/', [pathname]);
    const isHeroesPage = useMemo(() => pathname === '/characters', [pathname]);

    const isMdScreen = useMediaQuery({query: '(max-width: 992px)'});
    let isDesktopView = !isMdScreen;

    if (isAboutPage) {
        window.onresize = () => {
            isDesktopView = !isMdScreen;
        };
    }

    const body = document.querySelector('body');
    const heroBgContainer = document.querySelector('.about-hero-section .bg-container');
    const pageLoading = document.querySelector('.page-loading-section');
    const pageLoadingProgress = document.querySelector('.page-loading-progress');

    let isAutoScroll = false;

    const progressScroll = useCallback(() => {
        if (isAboutPage && !isHeroesPage) {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 60 + 10;
            let highlighter = document.querySelector('header .progress-wrap .highlighter');

            if (highlighter) {
                highlighter.style.top = `calc(${scrolled}vh)`;
            }
        }
    }, [isAboutPage, isHeroesPage]);

    useEffect(() => {
        if (isDesktopView && isAboutPage) {
            let progressWidth = 1;

            const progress = () => {
                if (progressWidth >= 100) {
                    clearInterval(id);
                } else {
                    progressWidth++;

                    if (pageLoadingProgress) {
                        pageLoadingProgress.style.width = progressWidth + "%";
                    }
                }
            }

            let id = setInterval(progress, 10);

            setTimeout(() => {
                window.scrollTo(0, 0);

                if (pageLoading) {
                    pageLoading.classList.add('hidden');
                }
            }, 500);
        }
    }, [isDesktopView, isAboutPage, pageLoadingProgress, pageLoading, progressScroll])

    useEffect(() => {
        if (isAboutPage) {
            window.addEventListener('scroll', () => {
                let activeIndex = heroSwiper?.activeIndex || 0;

                if (!isAutoScroll && window.scrollY === 0 && activeIndex === 1) {
                    body.classList.add('overflow-hidden');
                    heroSwiper.enable();
                    heroSwiper.slideTo(0, 1000);
                    heroBgContainer.classList.remove('active-last');
                }

                progressScroll();
            })
        }
    }, [isAboutPage, isAutoScroll, body, heroSwiper, heroBgContainer, progressScroll])

    const handleSlideChange = (swiper) => {
        let {activeIndex} = swiper;

        if (activeIndex === 1) {
            swiper.disable();
            swiper.update();
            heroBgContainer.classList.add('active-last');
            isAutoScroll = true;
            window.scrollTo(0, Math.round(window.innerHeight / 1000));
            setTimeout(() => {
                body.classList.remove('overflow-hidden');
                isAutoScroll = false;
            }, 1000);
        }
    };

    return (
        <section id="about-hero" className="about-hero-section">
            <Swiper
                modules={[Mousewheel]}
                className="hero-swiper"
                direction={'vertical'}
                speed={1000}
                allowTouchMove={false}
                enabled={true}
                mousewheel={{releaseOnEdges: true}}
                breakpoints={{
                    0: {
                        enabled: false
                    },
                    992: {
                        enabled: true
                    },
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                onSwiper={(swiper) => setHeroSwiper(swiper)}
            >
                <SwiperSlide>
                    <div className="text-wrap">
                        <h1 data-aos="fade-up" data-aos-delay="1100">immersive universe of<br/> blockchain superheroes</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-wrap second-slide-text-wrap">
                        <h2>Artwork</h2>
                        <p>We pride ourselves on creating premium digital collectibles. Our characters are designed with a small brush technique, following a semi-realistic approach. </p>
                        <Link to="/collection">
                            <span className="text">Explore Collection</span>
                            <span className="bg">
                                <AboutHeroBtnBg/>
                            </span>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="bg-container">
                <div className="bg-wrap">
                    <img src={aboutHeroBg} alt="Bg"/>
                </div>
                <div className="palms-wrap">
                    <img src={aboutHeroPalms} alt="Palms"/>
                </div>
                <div className="ground-wrap">
                    <img src={aboutHeroGround} alt="Ground"/>
                </div>
                <div className="particles-wrap">
                    <img src={aboutHeroParticlesLeftOne} className="particles-left-1" alt="Particles"/>
                    <img src={aboutHeroParticlesRightOne} className="particles-right-1" alt="Particles"/>
                    <img src={aboutHeroParticlesLeftTwo} className="particles-left-2" alt="Particles"/>
                    <img src={aboutHeroParticlesRightTwo} className="particles-right-2" alt="Particles"/>
                </div>
            </div>
            <div className="scroll-wrap">
                <span data-aos="fade-up" data-aos-delay="1200">
                    <img src={iconRoundScroll} alt="Scroll"/>
                </span>
            </div>
        </section>
    )
}

export default Hero;
