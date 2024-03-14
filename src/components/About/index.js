import React from 'react';

import ScrollToTopOnMount from "components/General/ScrollToTopOnMount";
import Footer from "components/General/Footer";

import Hero from "./Hero";
import Learn from "./Learn";
import Lit from "./Lit";
import Team from "./Team";


const About = () => {
    return (
        <>
            <ScrollToTopOnMount/>
            <main>
                <Hero/>
                <Learn/>
                <Lit/>
                <Team/>
            </main>
            <Footer/>
        </>
    )
}

export default About;
