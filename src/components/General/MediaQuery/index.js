import React, {useMemo} from 'react';
import {useMediaQuery} from 'react-responsive';

const MediaQuery = () => {
    const isXsScreen = useMediaQuery({query: '(max-width: 480px)'});
    const isSmScreen = useMediaQuery({query: '(max-width: 768px)'});
    const isMdScreen = useMediaQuery({query: '(max-width: 992px)'});
    const isLgScreen = useMediaQuery({query: '(max-width: 1200px)'});
    const isXlScreen = useMediaQuery({query: '(max-width: 1440px)'});
    const isXllScreen = useMediaQuery({query: '(max-width: 1680px)'});

    const screens = useMemo(() =>
            [isXsScreen, isSmScreen, isMdScreen, isLgScreen, isXlScreen, isXllScreen],
        [isXsScreen, isSmScreen, isMdScreen, isLgScreen, isXlScreen, isXllScreen]);

    return screens;
};

export default MediaQuery;
