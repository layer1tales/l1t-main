import React, {useEffect, useState} from 'react';

import ScrollToTopOnMount from "components/General/ScrollToTopOnMount";
import Footer from "components/General/Footer";

import Cover from "../Cover";
import Content from "../Content";
import Player from "../Player";

import {chaptersData} from "../chaptersData";

const Lore = ({chapterId}) => {
    const [isAudioPlayerActive, setIsAudioPlayerActive] = useState(false);
    const [isAudioPlayerHidden, setIsAudioPlayerHidden] = useState(false);

    useEffect(() => {
        if (chapterId) {
            setIsAudioPlayerActive(false);
        }
    }, [chapterId]);

    const handleScroll = () => {
        const loreNavWrap = document.querySelector('.lore-content-section .nav-wrap');
        const {top} = loreNavWrap.getBoundingClientRect();
        setIsAudioPlayerHidden(top - window.innerHeight < 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <ScrollToTopOnMount/>
            <main>
                <Cover
                    data={chaptersData[chapterId - 1]}
                    isAudioPlayerActive={isAudioPlayerActive}
                    setIsAudioPlayerActive={setIsAudioPlayerActive}
                />
                <Content data={chaptersData[chapterId - 1]}/>
                <Player
                    data={chaptersData}
                    chapterId={chapterId}
                    isAudioPlayerActive={isAudioPlayerActive}
                    isAudioPlayerHidden={isAudioPlayerHidden}
                />
            </main>
            <Footer/>
        </>
    )
}

export default Lore;
