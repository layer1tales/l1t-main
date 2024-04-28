import React, {useMemo} from 'react';
import {Container, Row, Col, Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

import {chaptersData} from "../chaptersData";
import loreDropdownArrowIcon from "assets/img/lore/lore-dropdown-arrow-icon.svg";
import {ReactComponent as LorePrevChapterBg} from "assets/img/lore/lore-prev-chapter-bg.svg";
import {ReactComponent as LoreNextChapterBg} from "assets/img/lore/lore-next-chapter-bg.svg";

const linksData = [
    {
        id: 1,
        link: '/lore/1',
        title: <>Chapter 1<br/>GLYPH OF DESIRE</>
    },

]

const Content = ({data}) => {
    const defaultData = {
        id: 1,
        text: <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>,
        prevChapterTitle: 'No title',
        nextChapterTitle: 'No title'
    }

    const {id, text, prevChapterTitle, nextChapterTitle} = data || defaultData;

    const nextChapterLink = useMemo(() => {
        if (id === chaptersData?.length) {
            return null;
        }

        return Number(id) + 1;
    }, [id]);

    const prevChapterLink = useMemo(() => {
        if (id === 1) {
            return null;
        }

        return Number(id) - 1;
    }, [id]);

    return (
        <section id="lore-content" className="lore-content-section">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="dropdown-wrap">
                            <Dropdown>
                                <Dropdown.Toggle>
                                    <span className="text">Lore Chapters</span>
                                    <span className="arrow">
                                        <img src={loreDropdownArrowIcon} alt="Arrow"/>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {linksData.map(l => {
                                        const {id, link, title} = l;

                                        return (
                                            <Link to={link} className="dropdown-item" key={id}>
                                                <p>{title}</p>
                                            </Link>
                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="text-wrap">
                            {text}
                        </div>
                        <div className="nav-wrap">
                            <Link to={`/lore/${prevChapterLink}`} data-aos="fade-right" data-aos-delay="0"
                                  className={!prevChapterLink ? 'hide' : ''}>
                                <span className="bg">
                                    <LorePrevChapterBg/>
                                </span>
                                <span className="text">
                                    <p>{`Chapter ${prevChapterLink}`}</p>
                                    <h5>{prevChapterTitle}</h5>
                                </span>
                            </Link>
                            <Link to={`/lore/${nextChapterLink}`} data-aos="fade-left" data-aos-delay="0"
                                  className={!nextChapterLink ? 'hide' : ''}>
                                <span className="bg">
                                    <LoreNextChapterBg/>
                                </span>
                                <span className="text">
                                    <p>{`Chapter ${nextChapterLink}`}</p>
                                    <h5>{nextChapterTitle}</h5>
                                </span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Content;
