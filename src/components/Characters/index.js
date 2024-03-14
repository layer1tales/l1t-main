import React from 'react';

import Hero from "./Hero";
import ScrollToTopOnMount from "components/General/ScrollToTopOnMount";
import Footer from "components/General/Footer";

const Heroes = () => {
    return (
        <>
            <ScrollToTopOnMount/>
            <main>
                <Hero/>
            </main>
            <Footer/>
        </>
    )
}

export default Heroes;
