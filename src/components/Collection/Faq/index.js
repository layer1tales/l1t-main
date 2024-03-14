import React from 'react';
import {Container, Row, Col, Accordion} from "react-bootstrap";

const Faq = () => {
    return (
        <section id="collection-faq" className="collection-faq-section">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="title-wrap">
                            <h2>Faq</h2>
                        </div>
                        <div className="accordion-wrap">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <h5>What is Layer 1 Tales collection about?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Our rendition of how Solana as a blockchain heroine would look like.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h5>What is the project's total supply?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>There is 10,000 unique, algorithmically generated Solana’s.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <h5>How many traits are in the collection?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>The collection has more than 300 traits across 15 categories.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <h5>Where can I buy the collection post mint?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>We will be listed on Tensor and Magic Eden.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        <h5>Are there secondary sales royalties?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Yes, the royalties are enforced at 4.2%.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                        <h5>Are you affiliated with Solana Labs?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>We have no affiliation with Solana Labs.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>
                                        <h5>How can I get in touch with the team?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Please send us a message on Discord.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faq;
