import {Link} from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap";
import MailchimpForm from "./Mailchimp";

import footerBefore from "assets/img/general/footer-before.svg";
import iconTwitterWhite from "assets/img/general/icon-twitter-white.svg";
import iconDiscordWhite from "assets/img/general/icon-discord-white.svg";
import iconTiktokWhite from "assets/img/general/icon-tiktok-white.svg";

const Footer = () => {
    return (
        <footer>
            <div className="before-wrap">
                <img src={footerBefore} alt="Footer"/>
            </div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="left-wrap">
                            <div className="socials-wrap">
                                <a href="https://twitter.com/layer1tales" target="_blank" rel="noreferrer">
                                    <img src={iconTwitterWhite} alt="Twitter Icon"/>
                                </a>
                                <a href="https://discord.gg/layer1tales" target="_blank" rel="noreferrer">
                                    <img src={iconDiscordWhite} alt="Discord Icon"/>
                                </a>
                                <a href="https://tiktok.com/realsolana" target="_blank" rel="noreferrer">
                                    <img src={iconTiktokWhite} alt="TikTok Icon"/>
                                </a>
                            </div>
                            <div className="copyright-wrap">
                                <p>© L1T Labs Inc.</p>
                            </div>
                        </div>
                        <div className="right-wrap">
                            <div className="form-wrap">
                                <p>Get on the list</p>
                                <MailchimpForm />
                            </div>
                            <div className="links-wrap">
                                <Link to="/terms">TERMS OF USE</Link>
                                <Link to="/privacy">Privacy policy</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
