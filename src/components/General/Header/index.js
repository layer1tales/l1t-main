import React, {useRef, useState, useEffect} from "react";
import {useLocation, Link} from 'react-router-dom';
import {Navbar} from "react-bootstrap";

import {ReactComponent as ProgressHighlighter} from "assets/img/header/progress-highlighter.svg";
import logoHeaderDesktop from "assets/img/header/logo-header-white.svg";
import iconSoundOn from "assets/img/header/icon-sound-on.svg";
import iconSoundOff from "assets/img/header/icon-sound-off.svg";
import progressLine from "assets/img/header/progress-line.svg";
import iconRoundScroll from "assets/img/general/icon-round-scroll.svg";
import {ReactComponent as IconTwitterColor} from "assets/img/header/icon-twitter-color.svg";
import {ReactComponent as IconDiscordColor} from "assets/img/header/icon-discord-color.svg";
import {ReactComponent as IconTiktokColor} from "assets/img/header/icon-tiktok-color.svg";
// import progressHighlighter from "assets/img/header/progress-highlighter.svg";

import sound from "assets/audio/sound.mp3";

const Header = ({isMdScreen}) => {
    const {pathname} = useLocation();
    const isAboutPage = pathname === '/';
    const isCharactersPage = pathname.startsWith('/characters')
    const isCollectionPage = pathname.startsWith('/collection')
    const isLorePage = pathname.startsWith('/lore')

    const [isScrollDown, setIsScrollDown] = useState(false);

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setIsScrollDown((scrollY > 100 && scrollY > lastScrollY));
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [isScrollDown]);

    const [isAudioPaused, setIsAudioPaused] = useState(true);
    const audioRef = useRef();

    const handlePlayAudio = () => {
        if (isAudioPaused) {
            audioRef.current.play();
            setIsAudioPaused(false);
        } else {
            audioRef.current.pause();
            setIsAudioPaused(true);
        }
    }

    const handleTogglerClick = () => {
        if (isMdScreen) {
            document.querySelector('body').classList.toggle('navbar-opened');
        }
    }

    const handleNavbarClose = () => {
        if (isMdScreen) {
            document.querySelector('header .navbar .navbar-toggler').click();
            document.querySelector('body').classList.remove('navbar-opened');

        }
    }

    return (
        <header className={`${isCharactersPage && 'no-fixed'} ${isScrollDown && 'scroll-down'}`}>
            <Navbar expand="lg" data-aos="fade-down" data-aos-delay="1000">
                {isAboutPage ? (
                    <div className="navbar-brand">
                        <img src={logoHeaderDesktop} alt="Logo"/>
                    </div>
                ) : (
                    <Link className="navbar-brand" to="/">
                        <img src={logoHeaderDesktop} alt="Logo"/>
                    </Link>
                )}
                <Navbar.Toggle onClick={handleTogglerClick}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </Navbar.Toggle>
                <div className="navbar-sound">
                    <div onClick={handlePlayAudio}>
                        <span className="text">{isAudioPaused ? 'SOUND OFF' : 'SOUND ON'}</span>
                        <span className="icon">
                            <img src={isAudioPaused ? iconSoundOff : iconSoundOn} alt="Sound Icon"/>
                        </span>
                    </div>
                    <audio ref={audioRef} id="audio" loop>
                        <source src={sound} type="audio/mp3"/>
                    </audio>
                </div>
                <Navbar.Collapse id="navbar-nav-dropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/collection" className={`nav-link ${isCollectionPage && 'active'}`}
                                  onClick={handleNavbarClose}>Collection</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/characters" className={`nav-link ${isCharactersPage && 'active'}`}
                                  onClick={handleNavbarClose}>Characters</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lore/1" className={`nav-link ${isLorePage && 'active'}`}
                                  onClick={handleNavbarClose}>Lore</Link>
                        </li>
                    </ul>
                    <ul className="navbar-socials">
                        <li className="mobile-only">
                            <p>Follow us on social media</p>
                        </li>
                        <li>
                            <a href="https://twitter.com/layer1tales" target="_blank" rel="noreferrer">
                                <IconTwitterColor/>
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.gg/layer1tales" target="_blank" rel="noreferrer">
                                <IconDiscordColor/>
                            </a>
                        </li>
                        <li>
                            <a href="https://tiktok.com/@l1tsolana" target="_blank" rel="noreferrer">
                                <IconTiktokColor/>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-links mobile-only">
                        <li>
                            <Link to="/terms" onClick={handleNavbarClose}>Terms of Use</Link>
                        </li>
                        <li>
                            <Link to="/privacy" onClick={handleNavbarClose}>Privacy Policy</Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
            {(isCharactersPage || isCollectionPage) && (
                <div className="progress-wrap" data-aos="fade-down" data-aos-delay="1100">
                    <span className="line">
                        <img src={progressLine} alt="Line"/>
                    </span>
                    <span className={`highlighter ${isCollectionPage && 'transition-none'}`} style={{top: `${isCharactersPage && ''}`}}>
                        <ProgressHighlighter/>
                    </span>
                </div>
            )}
            {isCollectionPage && (
                <div className="scroll-wrap" data-aos="fade-up" data-aos-delay="1200">
                    <span>
                        <img src={iconRoundScroll} alt="Scroll"/>
                    </span>
                </div>
            )}
        </header>
    );
}

export default Header;
