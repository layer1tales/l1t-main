import React from 'react';

import ScrollToTopOnMount from "components/General/ScrollToTopOnMount";
import Footer from "components/General/Footer";

import Hero from "./Hero";
import Traits from "./Traits";
import Video from "./Video";
import Collection from "./Collection";

const About = () => {
    return (
        <>
            <ScrollToTopOnMount/>
            <main>
                <Hero/>
                <Traits/>
                <Video/>
                <Collection/>
            </main>
            <Footer/>
        </>
    )
}

export default About;
