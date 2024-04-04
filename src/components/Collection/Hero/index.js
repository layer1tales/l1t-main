import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from 'swiper';
import {useMediaQuery} from "react-responsive";
import {useLocation} from "react-router-dom";

import {ReactComponent as AboutHeroBtnBg} from "assets/img/about/about-hero-btn-bg.svg";
import collectionHeroCharacter from "assets/img/collection/collection-hero-character.png";
import aboutHeroParticlesLeftOne from "assets/img/about/about-hero-particles-left-1.png";
import aboutHeroParticlesRightOne from "assets/img/about/about-hero-particles-right-2.png";
import charactersBgGrid from "assets/img/characters/characters-bg-grid.svg";

const Hero = () => {
    const [heroSwiper, setHeroSwiper] = useState(null);
    const {pathname} = useLocation();
    const isCollectionPage = useMemo(() => pathname === '/collection', [pathname]);
    const isHeroesPage = useMemo(() => pathname === '/characters', [pathname]);

    const isMdScreen = useMediaQuery({query: '(max-width: 992px)'});
    let isDesktopView = !isMdScreen;

    if (isCollectionPage) {
        window.onresize = () => {
            isDesktopView = !isMdScreen;
        };
    }

    const body = document.querySelector('body');
    const heroBgContainer = document.querySelector('.collection-hero-section .bg-container');
    const pageLoading = document.querySelector('.page-loading-section');
    const pageLoadingProgress = document.querySelector('.page-loading-progress');

    let isAutoScroll = false;

    const progressScroll = useCallback(() => {
        if (isCollectionPage && !isHeroesPage) {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 60 + 10;
            let highlighter = document.querySelector('header .progress-wrap .highlighter');

            if (highlighter) {
                highlighter.style.top = `calc(${scrolled}vh)`;
            }
        }
    }, [isCollectionPage, isHeroesPage])

    useEffect(() => {
        if (isDesktopView && isCollectionPage) {
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
    }, [isDesktopView, isCollectionPage, pageLoadingProgress, pageLoading, progressScroll])

    useEffect(() => {
        if (isCollectionPage) {
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
    }, [isCollectionPage, isAutoScroll, body, heroSwiper, heroBgContainer, progressScroll])

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

    const collectionVideoSection = document.getElementById('collection-video');
    const collectionNftSection = document.getElementById('collection-nft');

    const onHeroArtistBtnClick = useCallback(() => {
        if (collectionVideoSection) {
            heroSwiper.slideTo(1, 1000);
            window.scrollTo({
                top: collectionVideoSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    }, [collectionVideoSection, heroSwiper])

    const onHeroCollectionBtnClick = useCallback(() => {
        if (collectionNftSection) {
            heroSwiper.slideTo(1, 1000);
            window.scrollTo({
                top: collectionNftSection.offsetTop + 30,
                behavior: 'smooth'
            });
        }
    }, [collectionNftSection, heroSwiper])

    return (
        <section id="collection-hero" className="collection-hero-section">
            <Swiper
                modules={[Mousewheel]}
                className="collection-hero-swiper"
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
                    <div className="text-wrap" data-aos="fade-up" data-aos-delay="1100">
                        <h1>High Quality Hand Painted Artwork</h1>
                        <p>We Pride Ourselves on Creating Premium Digital Collectibles. Our Characters Are Designed With
                            Small Brush Technique, Following a Semi-realistic Approach.</p>
                        <a onClick={() => onHeroArtistBtnClick()}>
                            <span className="text">Our Artist</span>
                            <span className="bg">
                                <AboutHeroBtnBg/>
                            </span>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-wrap second-slide-text-wrap">
                        <div className="lines-wrap">
                            <div className="line">
                                <h2>Price</h2>
                                <h2>TBA</h2>
                            </div>
                            <div className="line">
                                <h2>Supply</h2>
                                <h2>TBA</h2>
                            </div>
                            <div className="line">
                                <h2>Mint Date</h2>
                                <h2>TBA</h2>
                            </div>
                        </div>
                        <p>Price will be set in SOL. Join our Discord for the supply and mint date reveal.</p>
                        <a onClick={() => onHeroCollectionBtnClick()}>
                            <span className="text">Our Collection</span>
                            <span className="bg">
                                <AboutHeroBtnBg/>
                            </span>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="bg-container">
                <div className="grid-wrap">
                    <img src={charactersBgGrid} alt="Grid Bg"/>
                </div>
                <div className="character-wrap">
                    <img src={collectionHeroCharacter} alt="Character"/>
                </div>
                <div className="particles-wrap">
                    <img src={aboutHeroParticlesLeftOne} className="particles-left-1" alt="Particles"/>
                    <img src={aboutHeroParticlesRightOne} className="particles-right-1" alt="Particles"/>
                </div>
            </div>
        </section>
    )
}

export default Hero;
