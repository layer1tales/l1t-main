import React from 'react';

import ScrollToTopOnMount from "components/General/ScrollToTopOnMount";
import Footer from "components/General/Footer";

import Hero from "./Hero";
import Video from "./Video";
import Nft from "./Nft";
import Faq from "./Faq";

const About = () => {
    return (
        <>
            <ScrollToTopOnMount/>
            <main>
                <Hero/>
                <Nft/>
                <Video/>
                <Faq/>
            </main>
            <Footer/>
        </>
    )
}

export default About;
