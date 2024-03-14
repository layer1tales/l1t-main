import React, {useEffect, useMemo} from 'react';
import {useLocation} from "react-router-dom";
import {Tab, Nav} from "react-bootstrap";

import {ReactComponent as ArtifactsDesktop} from "assets/img/characters/characters-artifacts-desktop.svg";
import {ReactComponent as ArtifactsTablet} from "assets/img/characters/characters-artifacts-tablet.svg";
import {ReactComponent as ArtifactsMobile} from "assets/img/characters/characters-artifacts-mobile.svg";
import charactersArtifactsDesktop from "assets/img/characters/characters-artifacts-desktop.mp4";
import charactersArtifactsTablet from "assets/img/characters/characters-artifacts-tablet.mp4";
import charactersArtifactsMobile from "assets/img/characters/characters-artifacts-mobile.mp4";
import charactersBgGrid from "assets/img/characters/characters-bg-grid.svg";
import charactersBioLine from "assets/img/characters/characters-bio-line.svg";
import charactersCharacterOne from "assets/img/characters/characters-character-1.png";
import charactersCharacterTwo from "assets/img/characters/characters-character-2.png";
import charactersCharacterThree from "assets/img/characters/characters-character-3.png";
import charactersCharacterFour from "assets/img/characters/characters-character-4.png";
import charactersCharacterFive from "assets/img/characters/characters-character-5.png";
import charactersProgressLineMobile from "assets/img/characters/characters-progress-line-mobile.svg";
import charactersBgNoise from "assets/img/characters/characters-bg-noise.png";

const Hero = () => {
    const {pathname} = useLocation();
    const isCharactersPage = useMemo(() => pathname === '/characters', [pathname]);

    const body = document.querySelector('body');

    const handleSetActiveTab = (activeTabIndex) => {
        body.classList.remove(...body.classList);
        body.classList.add(`active-hero-${activeTabIndex}`);
    }

    useEffect(() => {
        if (isCharactersPage) {
            body.classList.remove(...body.classList);
            body.classList.add('active-hero-1');
        }
    }, [isCharactersPage, body]);

    return (
        <section id="characters-hero" className="characters-hero-section">
            <div className="artifacts-wrap">
                <div className="artifacts-desktop">
                    <ArtifactsDesktop/>
                </div>
                <div className="artifacts-tablet">
                    <ArtifactsTablet/>
                </div>
                <div className="artifacts-mobile">
                    <ArtifactsMobile/>
                </div>
            </div>
            <div className="video-wrap">
                <div className="video-desktop">
                    <video preload="true" muted loop playsInline autoPlay>
                        <source src={charactersArtifactsDesktop} type="video/mp4"/>
                    </video>
                </div>
                <div className="video-tablet">
                    <video preload="true" muted loop playsInline autoPlay>
                        <source src={charactersArtifactsTablet} type="video/mp4"/>
                    </video>
                </div>
                <div className="video-mobile">
                    <video preload="true" muted loop playsInline autoPlay>
                        <source src={charactersArtifactsMobile} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="light-wrap">
                <svg width="1158" height="806" viewBox="0 0 1158 806" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_324_499)">
                        <path
                            d="M858 389.213C858 491.82 733.087 575 579 575C424.913 575 300 491.82 300 389.213C300 286.606 424.913 300.649 579 300.649C733.088 300.649 858 286.606 858 389.213Z"
                            fill="url(#paint0_radial_324_499)"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_324_499" x="0" y="6.10352e-05" width="1158" height="875"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_324_499"/>
                        </filter>
                        <radialGradient id="paint0_radial_324_499" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(586.142 347.262) rotate(90) scale(185.787 279)">
                            <stop stopColor="#E9ABE1"/>
                            <stop offset="1" stopColor="#E9ABE1" stopOpacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="grid-wrap">
                <img src={charactersBgGrid} alt="Grid Bg"/>
            </div>
            <div className="tabs-wrap">
                <Tab.Container id="left-tabs-example" defaultActiveKey="solana">
                    <div className="nav-tabs-wrap">
                        <Nav className="nav-tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="solana" className="nav-link-1"
                                          onClick={() => handleSetActiveTab(1)}>Solana</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="ethereum" className="nav-link-2"
                                          onClick={() => handleSetActiveTab(2)}>Ethereum</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="polkadot" className="nav-link-3"
                                          onClick={() => handleSetActiveTab(3)}>Polkadot</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="terra" className="nav-link-4"
                                          onClick={() => handleSetActiveTab(4)}>Terra</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="avalanche" className="nav-link-5"
                                          onClick={() => handleSetActiveTab(5)}>Avalanche</Nav.Link>
                            </Nav.Item>
                            <div className="nav-tabs-progress-wrap">
                                <span className="line">
                                    <img src={charactersProgressLineMobile} alt="Line"/>
                                </span>
                                <span className="highlighter">
                                    <svg width="158" height="38" viewBox="0 0 158 38" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_f_281_1986)">
                                            <path
                                                d="M15.8779 19L138.896 15.7283C140.737 15.6793 142.256 17.1584 142.256 19C142.256 20.8417 140.737 22.3207 138.896 22.2718L15.8779 19Z"
                                                fill="url(#paint0_linear_281_1986)"/>
                                        </g>
                                        <path
                                            d="M38 19.6806L136.11 17.0713C137.578 17.0322 138.79 18.2118 138.79 19.6806C138.79 21.1493 137.578 22.3289 136.11 22.2899L38 19.6806Z"
                                            fill="url(#paint1_linear_281_1986)"/>
                                        <defs>
                                            <filter id="filter0_f_281_1986" x="0.752929" y="0.602111"
                                                    width="156.628"
                                                    height="36.7958"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                <feBlend mode="normal" in="SourceGraphic"
                                                         in2="BackgroundImageFix"
                                                         result="shape"/>
                                                <feGaussianBlur stdDeviation="7.5625"
                                                                result="effect1_foregroundBlur_281_1986"/>
                                            </filter>
                                            <linearGradient id="paint0_linear_281_1986" x1="15.8779" y1="19"
                                                            x2="142.256" y2="19"
                                                            gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#E9ABE1" stopOpacity="0"/>
                                                <stop offset="1" stopColor="#E9ABE1"/>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_281_1986" x1="38" y1="19.6806"
                                                            x2="138.79"
                                                            y2="19.6806"
                                                            gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#E9ABE1" stopOpacity="0"/>
                                                <stop offset="1" stopColor="#E9ABE1"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                        </Nav>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="solana">
                            <div className="img-wrap" data-aos="fade-up" data-aos-delay="1000">
                                <img src={charactersCharacterOne} alt="Hero"/>
                            </div>
                            <div className="text-wrap" data-aos="fade-left" data-aos-delay="1000">
                                <h2>Biography</h2>
                                <p>Solana created a blockchain with blazing fast processing speed. She also
                                    founded a non-profit organization trying to make the world a better
                                    place by promoting decentralization. She holds the glyph
                                    created by Ethereum and is on a quest to decipher what it does.</p>
                                <div className="data-wrap">
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Age:<span
                                            className="value">26</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Height:<span
                                            className="value">5'4" / 163 cm</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Gender:<span
                                            className="value">Female</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Weight:<span
                                            className="value">120 lbs / 54 kg</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Hair:<span
                                            className="value">Brown</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Eyes:<span
                                            className="value">green</span></p>
                                    </div>
                                </div>
                                <div className="line-wrap">
                                    <img src={charactersBioLine} alt="Line"/>
                                </div>
                                <div className="additional-wrap">
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Education:<span
                                            className="value">Autodidact coder</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Occupation:<span
                                            className="value">Entrepreneur</span></p>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="ethereum">
                            <div className="img-wrap">
                                <img src={charactersCharacterTwo} alt="Hero"/>
                            </div>
                            <div className="text-wrap">
                                <h2>Biography</h2>
                                <p>Ethereum operates in a seemingly abandoned building outside of San Diego.
                                    He worked all of his life trying to create the perfect decentralized
                                    network. He also made a mysterious shimmering holographic glyph, with
                                    unknown powers. He is a fugitive from the government.</p>
                                <div className="data-wrap">
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Age:<span
                                            className="value">40</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Height:<span
                                            className="value">5'11" / 180 cm</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Gender:<span
                                            className="value">Male</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Weight:<span
                                            className="value">165 lbs / 75 kg</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Hair:<span
                                            className="value">White</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Eyes:<span
                                            className="value">Gray</span></p>
                                    </div>
                                </div>
                                <div className="line-wrap">
                                    <img src={charactersBioLine} alt="Line"/>
                                </div>
                                <div className="additional-wrap">
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Education:<span
                                            className="value">Autodidact</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Occupation:<span
                                            className="value">Activist</span></p>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="polkadot">
                            <div className="img-wrap">
                                <img src={charactersCharacterThree} alt="Hero"/>
                            </div>
                            <div className="text-wrap">
                                <h2>Biography</h2>
                                <p>Polkadot sold most of her DOT tokens a few years ago from the blockchain
                                    she founded. She diversified her self-made wealth in many asset classes
                                    around the world. The extent of her fortune remains a complete mystery
                                    to both governments and corporations.</p>
                                <div className="data-wrap">
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Age:<span
                                            className="value">30</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Height:<span
                                            className="value">5'4" / 163 cm</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Gender:<span
                                            className="value">Female</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Weight:<span
                                            className="value">105 lbs / 48 kg</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Hair:<span
                                            className="value">White</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Eyes:<span
                                            className="value">Brown</span></p>
                                    </div>
                                </div>
                                <div className="line-wrap">
                                    <img src={charactersBioLine} alt="Line"/>
                                </div>
                                <div className="additional-wrap">
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Education:<span
                                            className="value">MS in software engineering</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Occupation:<span
                                            className="value">Investor</span></p>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="terra">
                            <div className="img-wrap">
                                <img src={charactersCharacterFour} alt="Hero"/>
                            </div>
                            <div className="text-wrap">
                                <h2>Biography</h2>
                                <p>Terra hosted an algorithmic currency on her blockchain, mimicking the US
                                    dollar. She has always been an idealistic girl dreaming that everyone on
                                    earth should have access to decentralized money that maintains its
                                    value. She’s listed among the most wanted fugitives by the Fed.</p>
                                <div className="data-wrap">
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Age:<span
                                            className="value">28</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Height:<span
                                            className="value">5'6" / 168 cm</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Gender:<span
                                            className="value">Female</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Weight:<span
                                            className="value">121 lbs / 55 kg</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Hair:<span
                                            className="value">Red</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Eyes:<span
                                            className="value">Blue</span></p>
                                    </div>
                                </div>
                                <div className="line-wrap">
                                    <img src={charactersBioLine} alt="Line"/>
                                </div>
                                <div className="additional-wrap">
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Education:<span
                                            className="value">Autodidact</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Occupation:<span
                                            className="value">Philanthropist</span></p>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="avalanche">
                            <div className="img-wrap">
                                <img src={charactersCharacterFive} alt="Hero"/>
                            </div>
                            <div className="text-wrap">
                                <h2>Biography</h2>
                                <p>Avalanche once created an EVM-compatible blockchain and sold his majority
                                    stake to venture capitalists. He’s a well-known entrepreneur in the
                                    crypto industry who became consumed by greed after becoming wealthy.
                                    He’s very flamboyant and has an extroverted personality.</p>
                                <div className="data-wrap">
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Age:<span
                                            className="value">32</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Height:<span
                                            className="value">6'2" / 188 cm</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Gender:<span
                                            className="value">Male</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Weight:<span
                                            className="value">200 lbs / 90 kg</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Hair:<span
                                            className="value">Black</span></p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Eyes:<span
                                            className="value">Brown</span></p>
                                    </div>
                                </div>
                                <div className="line-wrap">
                                    <img src={charactersBioLine} alt="Line"/>
                                </div>
                                <div className="additional-wrap">
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Education:<span
                                            className="value">BSC Computer Science</span>
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p><span className="symbol">{`//`}</span>Occupation:<span
                                            className="value">Mercenary</span></p>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                    <div className="noise-wrap">
                        <img src={charactersBgNoise} alt="Noise"/>
                    </div>
                </Tab.Container>
            </div>
        </section>
    )
}

export default Hero;
