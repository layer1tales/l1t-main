import {useEffect, useState, useMemo} from "react";
import {useLocation} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import iconLoading from 'assets/img/general/icon-loading.svg';

const ScrollToTopOnMount = () => {
    const {pathname} = useLocation();
    const isAboutPage = pathname === '/';
    const isCollectionPage = pathname === '/collection';
    const isHeroesPage = useMemo(() => pathname === '/characters', [pathname]);

    const isMdScreen = useMediaQuery({query: '(max-width: 992px)'});

    const [isLoading, setIsLoading] = useState(true);
    const body = document.querySelector('body');

    let isDesktopView = !isMdScreen;

    window.onresize = () => {
        isDesktopView = !isMdScreen;
    };

    if (!isHeroesPage) {
        body.classList.remove(...body.classList);
    }

    if ((isAboutPage || isCollectionPage) && isDesktopView) {
        body.classList.add('overflow-hidden');
    }

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = "manual"
        }
        window.scrollTo(0, 0);
        setTimeout(() => setIsLoading(false), 1000);
    }, [isLoading]);

    if (isLoading) {
        return (
            <>
                <section className="loading-wrap">
                    <img src={iconLoading} alt="Loading"/>
                </section>
            </>
        )
    }

    return null;
}

export default ScrollToTopOnMount;
