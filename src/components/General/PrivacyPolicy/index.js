import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

import ScrollToTopOnMount from "components/General/ScrollToTopOnMount";
import Footer from "components/General/Footer";

const PrivacyPolicy = () => {
    return (
        <>
            <ScrollToTopOnMount/>
            <main>
                <section id="privacy-policy" className="terms-privacy-section">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="headline-wrap">
                                    <h2>Privacy</h2>
                                </div>
                                <div className="text-wrap">
                                    <h3>LAST UPDATE</h3>
                                    <p>March 1st, 2024</p>
                                    <h3>AGREEMENT</h3>
                                    <p>L1T Labs provides NFTs through its website (hereafter referred to as the
                                        ‘Site’). By accessing any content on this Site or receiving any NFTs we provide
                                        (hereafter referred to as ‘Resources’), you expressly understand and agree to
                                        accept and adhere to the following statements of this policy (hereafter referred
                                        to as ‘Privacy Policy’), along with the terms and conditions as stated in
                                        our <Link to={'/terms'}>Terms of Use</Link>. If you do not agree to be bound by
                                        our Privacy Policy or if you are unable to assume the obligations set forth
                                        herein, please do not access or receive our Resources. We reserve the right to
                                        restrict, terminate or deny your access if you fail to comply and without any
                                        notice.</p>
                                    <h3>INFORMATION COLLECTION POLICY</h3>
                                    <p>We collect information from you when you visit our Site or fill out a form. When
                                        ordering or registering on our Site, you may be asked to enter your: e-mail,
                                        Twitter, Discord and SOL wallet information.<br/><br/> Google, as a third party
                                        vendor, uses cookies to serve specific ads. Google’s use of the DART cookie
                                        enables it to serve ads to ours users based on their visit to this Site and
                                        other websites on the Internet. You may opt out of the use of the DART cookie by
                                        visiting the Google ad and content network privacy policy.</p>
                                    <h3>INFORMATION USAGE POLICY</h3>
                                    <p>Any information we collect from you may be used in one of the following ways:
                                        <br/><br/>
                                        ; To personalize your experience
                                        Your information helps us to better customize your view of our Resources.
                                        <br/><br/>
                                        ; To improve our Site
                                        We continually strive to improve our Site functionality and Resources offerings
                                        based on the information and feedback we receive from you.
                                        <br/><br/>
                                        ; To improve customer service
                                        Your information helps us to more effectively respond to your customer service
                                        requests and support needs related to the usage of this Site or our Resources.
                                        <br/><br/>
                                        ; To process transactions
                                        Your information will not be sold, exchanged, transferred, or given to any other
                                        company for any reason whatsoever, without your consent, other than for the
                                        express purpose of delivering the purchased product or service requested.
                                        <br/><br/>
                                        ; To send periodic emails
                                        The email address you provide may be used to send you information, respond to
                                        inquiries, and/or other requests or questions regarding our Resources.
                                        <br/><br/>
                                        Note: If at any time you would like to unsubscribe from receiving future emails,
                                        we include detailed unsubscribe instructions at the bottom of each email.</p>
                                    <h3>CALIFORNIA ONLINE PRIVACY PROTECTION ACT</h3>
                                    <p>Because we value your privacy, we have taken the necessary steps to be in
                                        compliance with the California Online Privacy Protection Act. We therefore will
                                        not distribute your personal information to outside parties without your
                                        consent.</p>
                                    <h3>INFORMATION PROTECTION POLICY</h3>
                                    <p>We implement a variety of security measures to maintain the safety of your
                                        personal information. All supplied sensitive information is transmitted via SSL
                                        technology and then encrypted into our minting platform database only to be
                                        accessible by those authorized with special access rights to such systems, and
                                        are required to keep the information confidential. After a transaction, your SOL
                                        wallet information will not be stored on our servers.</p>
                                    <h3>COOKIE USAGE POLICY</h3>
                                    <p>We use cookies to compile aggregate data about Site traffic and Site interaction
                                        so that we can offer better Site experiences and tools in the future. We may
                                        contract with third-party service providers to assist us in better understanding
                                        our Site visitors. These third-party service providers are not permitted to use
                                        the information collected on our behalf except to help us conduct and improve
                                        our business. An example of third-party provider we use is Google AdSense.</p>
                                    <h3>THIRD PARTY DISCLOSURE POLICY</h3>
                                    <p>We do not sell, distribute, trade, or otherwise transfer to outside parties your
                                        personally identifiable information. This does not include trusted third parties
                                        who assist us in operating our website, conducting our business, or servicing
                                        you, so long as those parties agree to keep this information confidential. We
                                        may also release your information when we believe release is appropriate to
                                        comply with the law, enforce our Site policies, or protect ours or others
                                        rights, property, or safety. However, non-personally identifiable visitor
                                        information may be provided to other parties for marketing, advertising, or
                                        other uses.</p>
                                    <h3>THIRD PARTY LINKS POLICY</h3>
                                    <p>Occasionally, at our discretion, we may include or offer third party products or
                                        services on our Site. Be advised these third party websites have separate and
                                        independent privacy policies. We therefore have no responsibility or liability
                                        for the content and activities of these linked websites. Nonetheless, we seek to
                                        protect the integrity of our Site and welcome any feedback about these
                                        websites.</p>
                                    <h3>CHANGES TO OUR PRIVACY POLICY</h3>
                                    <p>We reserve the right to change this Privacy Policy from time to time without
                                        notice. You expressly acknowledge and agree that it is your responsibility to
                                        review it periodically to familiarize yourself with any modifications. Your
                                        continued use of this Site will constitute acknowledgment and agreement of these
                                        modifications.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default PrivacyPolicy;
