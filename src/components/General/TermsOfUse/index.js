import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

import ScrollToTopOnMount from "components/General/ScrollToTopOnMount";
import Footer from "components/General/Footer";

const TermsOfUse = () => {
    return (
        <>
            <ScrollToTopOnMount/>
            <main>
                <section id="terms-of-use" className="terms-privacy-section">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="headline-wrap">
                                    <h2>Terms</h2>
                                </div>
                                <div className="text-wrap">
                                    <h3>LAST UPDATE</h3>
                                    <p>March 1st, 2024</p>
                                    <h3>AGREEMENT</h3>
                                    <p>L1T Labs provides NFTs through its website (hereafter referred to as the
                                        ‘Site’). By accessing any content on this Site or receiving any NFTs we provide
                                        (hereafter referred to as ‘Resources’), you expressly understand and agree to
                                        accept and adhere to the following statements in this policy (hereafter referred
                                        to as ‘Terms of Use’), along with the terms and conditions as stated in
                                        our <Link to={'/privacy'}>Privacy Policy</Link>. If you do not agree with our
                                        Terms of Use or if you are unable to assume the obligations set forth herein,
                                        please do not access or receive our Resources. We reserve the right to restrict,
                                        terminate or deny your access if you fail to comply and without any
                                        notice.<br/><br/> Supplemental terms and conditions may be posted on the Site
                                        from time to time. We reserve the right, in our sole discretion, to make changes
                                        or modifications to these Terms of Use at any time and for any reason. We will
                                        alert you about any changes by updating these Terms of Use, and you waive any
                                        right to receive specific notice of each such change. It is your responsibility
                                        to periodically review these Terms of Use to stay informed of updates. You will
                                        be subject to, and will be deemed to have been made aware of and to have
                                        accepted, the changes in any revised Terms of Use by your continued use of the
                                        Site after the date such revised Terms of Use are posted.<br/><br/> The NFTs
                                        provided are not intended for distribution to or use by any person or entity in
                                        any jurisdiction or country where such distribution or use would be contrary to
                                        law or regulation or which would subject us to any registration requirement
                                        within such jurisdiction or country. Users who choose to access the Site from
                                        other locations do so on their own initiative and are solely responsible for
                                        compliance with local laws, if and to the extent local laws are applicable.</p>
                                    <h3>NO RECOMMENDATION</h3>
                                    <p>L1T Labs is not registered as an Investment Advisor, Financial Planner,
                                        Financial Analyst, Portfolio Manager, Financial Bank or Securities Broker in any
                                        jurisdiction. All Resources accessed or received are general in nature and were
                                        made for educational purposes only. They do not constitute financial advice or
                                        any other advice specific to you and do not contain any solicitation to buy or
                                        sell any financial securities or instruments.</p>
                                    <h3>NO LIABILITY</h3>
                                    <p>By accessing or receiving our Resources, you expressly understand and hereby
                                        agree that L1T Labs will not be held liable for any direct, indirect,
                                        incidental, consequential, special, exemplary, or punitive financial loss or
                                        damages which may be incurred as a result of using our Resources, or as a result
                                        of any changes, data loss, file corruption, cancellation, loss of access, or
                                        Site downtime to the full extent of applicable Canadian laws.</p>
                                    <h3>NO WARRANTY</h3>
                                    <p>Our forward looking statements involve inherent risks and uncertainties which may
                                        cause actual results, performance or achievements of both L1T Labs and
                                        its users to be materially different from results, performance or achievements
                                        expressed or implied by our Resources. Past performance may differ from real
                                        performance and past performance is neither an explicit nor implicit guarantee
                                        of future performance.</p>
                                    <h3>SUITABILITY RISK</h3>
                                    <p>The digital assets and/or NFTs described in our Resources may neither be suitable
                                        to you nor eligible in your jurisdiction. By accessing or receiving our
                                        Resources, you must take in consideration your own financial objectives and
                                        constraints as part of your investment process. Always undertake your own due
                                        diligence or seek a qualified and registered financial professional before
                                        taking any real investment decision in your portfolio.</p>
                                    <h3>ACCURACY RISK</h3>
                                    <p>The Resources provided herein have been gathered or arrived from various sources
                                        believed to be reliable but we make no explicit nor implicit warranty on their
                                        accuracy. Views and opinions expressed in our reports are those of World of
                                        Solana and may be subject to change without notice. Any defects in the operation
                                        or functionality of any Resources we provide will be repaired or corrected
                                        promptly by our staff once notified.</p>
                                    <h3>MODEL RISK</h3>
                                    <p>Some Resources provided herein are based on algorithms generated automatically.
                                        While they have been generated following strict conditions, results are merely
                                        hypothetical. They could be subject to various model risks such as model
                                        inapplicability, inaccurate model specification, programming errors, technical
                                        errors, use of inaccurate approximations, implementation risk, various data
                                        issues, miscalculations and calibration errors.</p>
                                    <h3>DISCLOSURE POLICY</h3>
                                    <p>L1T Labs and/or its employees may own interests in digital assets and/or
                                        NFTs described in our Resources. In compliance with best practice standards, we
                                        will disclose these positions at the time of writing or updating our Resources.
                                        However, we will not notify the variation of said positions in time and shall
                                        receive no liability from any user that relates to these positions.</p>
                                    <h3>INTELLECTUAL PROPERTY</h3>
                                    <p>All Resources accessed or received but not limited to texts, graphics, images,
                                        codes, files, brand and logo are the intellectual property of L1T Labs,
                                        and are protected by applicable copyright and trademark law. Any inappropriate
                                        use, including but not limited to the reproduction, distribution, display or
                                        transmission of any content on this Site is strictly prohibited, unless
                                        authorized.</p>
                                    <h3>OWNERSHIP</h3>
                                    <p>With your agreement and continuing compliance with these Terms of Services, World
                                        of Solana grants you a non-commercial, non-exclusive, non-transferable,
                                        non-sublicensable, revocable, limited license to access and use the NFTs for
                                        your own entertainment and informational purposes subject to the limitations in
                                        these Terms. You agree that you will not use the NFTs for any other purpose.</p>
                                    <h3>PRIVACY POLICY</h3>
                                    <p>Your privacy is very important to us, which is why we have created a
                                        separate <Link to={'/privacy'}>Privacy Policy</Link>. This policy is included
                                        under the scope of these Terms of Use and covers the following topics
                                        thoroughly: Information Collection, Information Protection, Information Usage,
                                        Cookie Usage, Third Party Disclosure, Third Party Links, California Online
                                        Privacy Protection Act and Changes to our Privacy Policy.</p>
                                    <h3>USER REPRESENTATIONS</h3>
                                    <p>By using the Site, you represent and warrant that: (1) all information you submit
                                        will be true, accurate, current, and complete; (2) you will maintain the
                                        accuracy of such information and promptly update such information as necessary;
                                        (3) you have the legal capacity and you agree to comply with these Terms of Use;
                                        (4) you will not use the Site for any illegal or unauthorized purpose; and (5)
                                        your use of the Site will not violate any applicable law or regulation. If you
                                        provide any information that is untrue, inaccurate, not current, or incomplete,
                                        we have the right to suspend or terminate your account and refuse any and all
                                        current or future use of the Site.</p>
                                    <h3>USER DATA</h3>
                                    <p>We will maintain certain data that you transmit to the Site for the purpose of
                                        managing the Site, as well as data relating to your use of the Site. Although we
                                        perform regular routine backups, you are solely responsible for all data that
                                        you transmit or that relates to any activity you have undertaken using the Site.
                                        You agree that we shall have no liability to you for any loss or corruption of
                                        any such data, and you hereby waive any right of action against us arising from
                                        any such loss or corruption of such data.</p>
                                    <h3>PAYMENT</h3>
                                    <p>We are using a custom Solana-based mint Site as our online payment processing
                                        system. All payments shall be made in SOL cryptocurrency. You authorize us to
                                        charge your selected SOL wallet for any such amounts upon making your purchase.
                                        We reserve the right to correct any errors or mistakes in pricing, before we
                                        have requested or received payment. We also reserve the right to refuse any
                                        order placed through the Site.</p>
                                    <h3>CANCELLATION</h3>
                                    <p>All purchases are non-refundable.</p>
                                    <h3>RESPONSIBLE USE AND CONDUCT</h3>
                                    <p>A) By accessing or receiving any of our Resources we provide for you, either
                                        directly or indirectly, you agree to use these Resources only for the purposes
                                        intended as permitted by (a) the terms of this User Agreement, and (b)
                                        applicable laws, regulations and generally accepted online practices or
                                        guidelines. Wherein, you understand that: To access our Resources, you may be
                                        required to provide certain information as part of your ability to use the
                                        Resources. You are responsible for keeping the confidentiality of any login
                                        information associated with any account you use to access our Resources. You are
                                        also responsible for all activities that occur under your SOL wallet on our
                                        Site.<br/><br/>B) Accessing (or attempting to bypass access) any of our
                                        Resources by any means other than through the means we provide, is strictly
                                        prohibited. You specifically agree not to access (or attempt to bypass access)
                                        any of our Resources through any automated, unethical or unconventional means.
                                        Engaging in any activity that disrupts or interferes with our Resources,
                                        including the servers and/or networks to which our Resources are located or
                                        connected, is strictly prohibited. Attempting to copy, duplicate, reproduce,
                                        sell, trade, or resell our Resources without prior consent is strictly
                                        prohibited. You are solely responsible any consequences, losses, or damages that
                                        we may directly or indirectly incur or suffer due to any unauthorized activities
                                        conducted by you, as explained above, and may incur criminal or civil liability.
                                        <br/><br/>C) We may provide various open communication tools on our Site and
                                        various social
                                        media services. We reserve the right at our sole discretion to remove any
                                        content that, we feel in our judgment does not comply with this User Agreement,
                                        along with any content that we feel is otherwise offensive, harmful,
                                        objectionable, inaccurate, or violates any 3rd party copyrights or trademarks.
                                        We are not responsible for any delay or failure in removing such content. If you
                                        post content that we choose to remove, you hereby consent to such removal, and
                                        consent to waive any claim against us.<br/><br/>D) We do not assume any direct
                                        or indirect liability for any content posted by you or any other 3rd party users
                                        of our Site. However, any content posted by you using any open communication
                                        tools on our Site, provided that it doesn’t violate or infringe on any 3rd party
                                        copyrights or trademarks, becomes the property of L1T Labs, and as such,
                                        gives us a perpetual, irrevocable, worldwide, royalty-free, exclusive license to
                                        reproduce, modify, adapt, translate, publish, publicly display and/or distribute
                                        as we see fit. This only refers to content posted via open communication tools
                                        as described, and does not refer to information that is provided as part of the
                                        registration process, necessary in order to use our Resources. All information
                                        provided as part of our registration process is covered by our Privacy
                                        Policy.<br/><br/>E) You agree to indemnify and hold harmless L1T Labs and
                                        its parent company and affiliates, and their directors, officers, managers,
                                        employees and licensors, from and against all losses, expenses, damages and
                                        costs, including reasonable attorneys’ fees, resulting from any violation of
                                        this User Agreement or the failure to fulfill any obligations relating to your
                                        account incurred by you or any other person using your account. We reserve the
                                        right to take over the exclusive defense of any claim for which we are entitled
                                        to indemnification under this User Agreement. In such event, you shall provide
                                        us with such cooperation as is reasonably requested by us.</p>
                                    <h3>TERM AND TERMINATION</h3>
                                    <p>These terms of use shall remain in full force and effect while you use the Site.
                                        Without limiting any other provision of these terms of use, we reserve the right
                                        to, in our sole discretion and without notice or liability, deny access to and
                                        use of the Site (including blocking certain IP addresses), to any person for any
                                        reason or for no reason, including without limitation: (i), using, copying or
                                        distributing our Resources other than as expressly authorized by this Terms of
                                        Use; or (ii) breaching of any representation; warranty, or covenant contained in
                                        these terms of use or of any applicable law or regulation. We may terminate your
                                        use of the Site without warning, in our sole discretion. In addition, we reserve
                                        the right to take appropriate legal action, including without limitation
                                        pursuing civil, criminal, and injunctive redress.</p>
                                    <h3>SITE MANAGEMENT</h3>
                                    <p>We reserve the right, but not the obligation, to: (1) monitor the Site for
                                        violations of these Terms of Use; (2) take appropriate legal action against
                                        anyone who, in our sole discretion, violates the law or these Terms of Use,
                                        including without limitation, reporting such user to law enforcement
                                        authorities; (3) in our sole discretion and without limitation, refuse, restrict
                                        access to, limit the availability of, or disable (to the extent technologically
                                        feasible) any of your Contributions or any portion thereof; (4) in our sole
                                        discretion and without limitation, notice, or liability, to remove from the Site
                                        or otherwise disable all files and content that are excessive in size or are
                                        burdensome to our systems; and (5) otherwise manage the Site in a manner
                                        designed to protect our rights and property and to facilitate the proper
                                        functioning of the Site.</p>
                                    <h3>SITE CORRECTIONS</h3>
                                    <p>There may be information on the Site that contains typographical errors,
                                        inaccuracies, or omissions, including descriptions, pricing, and various other
                                        information. We reserve the right to correct any errors, inaccuracies, or
                                        omissions and to change or update the information on the Site at any time,
                                        without prior notice.</p>
                                    <h3>SITE MODIFICATIONS AND INTERRUPTIONS</h3>
                                    <p>We reserve the right to change, modify, or remove the contents of the Site at any
                                        time or for any reason at our sole discretion without notice. However, we have
                                        no obligation to update any information on our Site. We also reserve the right
                                        to modify or discontinue all or part of the Site without notice at any time. We
                                        will not be liable to you or any third party for any modification, price change,
                                        suspension, or discontinuance of the Site. We cannot guarantee the Site will be
                                        available at all times. We may experience hardware, software, or other problems
                                        or need to perform maintenance related to the Site, resulting in interruptions,
                                        delays, or errors. We reserve the right to change, revise, update, suspend,
                                        discontinue, or otherwise modify the Site at any time or for any reason without
                                        notice to you. You agree that we have no liability whatsoever for any loss,
                                        damage, or inconvenience caused by your inability to access or use the Site
                                        during any downtime or discontinuance of the Site. Nothing in these Terms of Use
                                        will be construed to obligate us to maintain and support the Site or to supply
                                        any corrections, updates, or releases in connection therewith.</p>
                                    <h3>GOVERNING LAW</h3>
                                    <p>These Terms of Use and any policies or operating rules posted by us on the Site
                                        and your use of the Site are governed by and construed in accordance with the
                                        laws of the Province of Quebec applicable to agreements made and to be entirely
                                        performed within the Province of Quebec, without regard to its conflict of law
                                        principles.</p>
                                    <h3>DISPUTE RESOLUTION</h3>
                                    <p>Any legal action brought by either you or us (collectively, the ‘Parties” and
                                        individually, a “Party’) shall be commenced or prosecuted in the Province of
                                        Quebec, and the Parties hereby consent to, and waive all defenses of lack of
                                        personal jurisdiction and forum non conveniens with respect to venue and
                                        jurisdiction in such provincial courts. Application of the United Nations
                                        Convention on Contracts for the International Sale of Goods and the Uniform
                                        Computer Information Transaction Act are excluded. In no event shall any claim,
                                        action, or proceeding brought by either Party related to the Site be commenced
                                        more than one (1) year after the cause of action arose.</p>
                                    <h3>LIMITATIONS OF LIABILITY</h3>
                                    <p>Under no circumstance will we or our directors, employees, or agents be liable to
                                        you or any third party for any direct, indirect, consequential, exemplary,
                                        incidental, special, or punitive damages, including lost profit, lost revenue,
                                        loss of data, or other damages arising from your use of the Site, even if we
                                        have been warned of such possibility. Notwithstanding anything to the contrary
                                        contained herein, our liability to you for any cause whatsoever and regardless
                                        of the form of the action, will at all times be limited to the amount paid, if
                                        any, by you to us during the six (6) month period prior to any cause of action
                                        arising. Certain provincial laws do not allow limitations on implied warranties
                                        or the exclusion or limitation of certain damages. If these laws apply to you,
                                        some or all of the above limitations may not apply to you.</p>
                                    <h3>INDEMNIFICATION</h3>
                                    <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
                                        affiliates, and all of our respective officers, agents, partners, and employees,
                                        from and against any loss, damage, liability, claim, or demand, including
                                        reasonable attorneys’ fees and expenses, made by any third party due to or
                                        arising out of: (1) use of the Site; (2) breach of these Terms of Use; (3) any
                                        breach of your representations and warranties set forth in these Terms of Use;
                                        (4) your violation of the rights of a third party, including but not limited to
                                        intellectual property rights; or (5) any overt harmful act toward any other user
                                        of the Site. We reserve the right, at your expense, to assume the exclusive
                                        defense and control of any matter for which you are required to indemnify us,
                                        and you agree to cooperate, at your expense, with our defense of such claims. We
                                        will use reasonable efforts to notify you of any such claim, action, or
                                        proceeding which is subject to this indemnification upon becoming aware of
                                        it.</p>
                                    <h3>ELECTRONIC COMMUNICATIONS</h3>
                                    <p>Visiting the Site, sending us emails, and completing online forms constitute
                                        electronic communications. You consent to receive electronic communications, and
                                        you agree that all agreements, notices, disclosures, and other communications we
                                        provide to you electronically, via email and on the Site, satisfy any legal
                                        requirement that such communication be in writing. You hereby agree to the use
                                        of electronic signatures and to the electronic delivery of transactions
                                        initiated or completed by us or via the site. You hereby waive any rights or
                                        requirements under any statutes, regulations, rules, ordinances, or other laws
                                        in any jurisdiction which require an original signature or delivery or retention
                                        of non-electronic records, or to payments or the granting of credits by any
                                        means other than electronic means.</p>
                                    <h3>MISCELLANEOUS</h3>
                                    <p>These Terms of Use and any policies or operating rules posted by us on the Site
                                        or in respect to the Site constitute the entire agreement and understanding
                                        between you and us. Our failure to exercise or enforce any right or provision of
                                        these Terms of Use shall not operate as a waiver of such right or provision.
                                        These Terms of Use operate to the fullest extent permissible of Canadian law. We
                                        may assign any or all of our rights and obligations to others at any time. We
                                        shall not be responsible or liable for any loss, damage, delay, or failure to
                                        act caused by any cause beyond our reasonable control. If any provision or part
                                        of a provision of these Terms of Use is determined to be unlawful, void, or
                                        unenforceable, that provision or part of the provision is deemed severable from
                                        these Terms of Use and does not affect the validity and enforceability of any
                                        remaining provisions. There is no joint venture, partnership, employment or
                                        agency relationship created between you and us as a result of these Terms of Use
                                        or use of the Site. You agree that these Terms of Use will not be construed
                                        against us by virtue of having drafted them. You hereby waive any and all
                                        defenses you may have based on the electronic form of these Terms of Use and the
                                        lack of signing by the parties hereto to execute these Terms of Use.</p>
                                    <h3>DISCLAIMER</h3>
                                    <p>The Site is provided on an as-is and as-available basis. You agree that your use
                                        of the Site and our services will be at your sole risk. To the fullest extent
                                        permitted by law, we disclaim all warranties, express or implied, in connection
                                        with the Site and your use thereof, including, without limitation, the implied
                                        warranties of merchantability, fitness for a particular purpose, and
                                        non-infringement. We make no warranties or representations about the accuracy or
                                        completeness of the Site’s content or the content of any websites linked to the
                                        Site and we will assume no liability or responsibility for any (1) errors,
                                        mistakes, or inaccuracies of content and materials, (2) personal injury or
                                        property damage, of any nature whatsoever, resulting from your access to and use
                                        of the Site, (3) any unauthorized access to or use of our secure servers and/or
                                        any and all personal information and/or financial information stored therein,
                                        (4) any interruption or cessation of transmission to or from the Site, (5) any
                                        bugs, viruses, trojan horses, or the like which may be transmitted to or through
                                        the Site by any third party, and/or (6) any errors or omissions in any content
                                        and materials or for any loss or damage of any kind incurred as a result of the
                                        use of any content posted, transmitted, or otherwise made available via the
                                        Site. We do not warrant, endorse, guarantee, or assume responsibility for any
                                        product or service advertised or offered by a third party through the Site, any
                                        hyperlinked Site, or any Site or mobile application featured in any banner or
                                        other advertising, and we will not be a party to or in any way be responsible
                                        for monitoring any transaction between you and any third-party providers of
                                        products or services. As with the purchase of a product or service in any
                                        environment, you should use your best judgment and exercise caution where
                                        appropriate.</p>
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

export default TermsOfUse;
