import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useMediaQuery} from "react-responsive";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {aosSettings} from 'aosSettings';

import Header from './components/General/Header';
import About from './components/About';
// import Art from './components/Art';
import Collection from './components/Collection';
import Characters from './components/Characters';
import Lore from './components/Lore';
import NotFound from './components/NotFound';
import TermsOfUse from './components/General/TermsOfUse';
import PrivacyPolicy from './components/General/PrivacyPolicy';

import './App.scss';

const App = () => {
    const appHeightHandle = () => {
        document.querySelector('body').style.setProperty('--app-height', window.innerHeight + 'px');
    }

    const isMdScreen = useMediaQuery({query: '(max-width: 992px)'});

    let isDesktopView = !isMdScreen;

    appHeightHandle();

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1200) {
            appHeightHandle();
        }
    });

    if (isDesktopView) {
        AOS.init(aosSettings);
    }

    return (
        <>
            <Router>
                <Header isMdScreen={isMdScreen}/>
                <Switch>
                    <Route exact path="/" component={About}/>
                    {/*<Route exact path="/art" component={Art}/>*/}
                    <Route exact path="/collection" component={Collection}/>
                    <Route exact path="/characters" component={Characters}/>
                    <Route exact path="/lore/:chapterId" component={Lore}/>
                    <Route exact path="/terms" component={TermsOfUse}/>
                    <Route exact path="/privacy" component={PrivacyPolicy}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </>
    )
};

export default App;
