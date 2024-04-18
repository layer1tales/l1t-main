import React from 'react';
import {useParams} from "react-router-dom";

import Lore from "./Lore";

const LoreWrap = () => {
    let { chapterId } = useParams();

    return (
        <Lore key={chapterId} chapterId={chapterId}></Lore>
    )
}

export default LoreWrap;
