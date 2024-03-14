import React from 'react';
import {useParams} from "react-router-dom";

import ScrollToTopOnMount from "components/General/ScrollToTopOnMount";
import Footer from "components/General/Footer";

import Cover from "./Cover";
import Content from "./Content";
import {chaptersData} from "chaptersData";

const Lore = () => {
    let {chapterId} = useParams();

    return (
        <>
            <ScrollToTopOnMount/>
            <main>
                <Cover data={chaptersData[chapterId - 1]}/>
                <Content data={chaptersData[chapterId - 1]}/>
            </main>
            <Footer/>
        </>
    )
}

export default Lore;
