import React, {useEffect, useState, useMemo} from 'react';
import {Container, Row, Col, Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

import {chaptersData} from "chaptersData";
import loreDropdownArrowIcon from "assets/img/lore/lore-dropdown-arrow-icon.svg";
import {ReactComponent as LorePrevChapterBg} from "assets/img/lore/lore-prev-chapter-bg.svg";
import {ReactComponent as LoreNextChapterBg} from "assets/img/lore/lore-next-chapter-bg.svg";
import iconLoading from "assets/img/general/icon-loading.svg";

const linksData = [
    {
        id: 1,
        link: '/lore/1',
        title: <>Chapter 1<br/>GLYPH OF DESIRE</>
    },
    // {
    //     id: 2,
    //     link: '/lore/2',
    //     title: <>Chapter 2<br/> THE CELESTIAL RIDE</>
    // },
    // {
    //     id: 3,
    //     link: '/lore/3',
    //     title: <>Chapter 3<br/> A RIDDLE WITH<br/> NO ANSWER</>
    // },
    // {
    //     id: 4,
    //     link: '/lore/4',
    //     title: <>Chapter 4<br/> MONEY NEVER SLEEPS</>
    // },
    // {
    //     id: 5,
    //     link: '/lore/5',
    //     title: <>Chapter 5<br/> BEHIND BLOCK 42</>
    // },
    // {
    //     id: 6,
    //     link: '/lore/6',
    //     title: <>Chapter 6<br/> A HIGH PRICE<br/> TO PAY</>
    // },
    // {
    //     id: 7,
    //     link: '/lore/7',
    //     title: <>Chapter 7<br/> HEAD IN THE CLOUDS</>
    // },
    // {
    //     id: 8,
    //     link: '/lore/8',
    //     title: <>Chapter 8<br/> RECKLESS PURSUIT</>
    // },
    // {
    //     id: 9,
    //     link: '/lore/9',
    //     title: <>Chapter 9<br/> DARKNESS BEFORE<br/> THE DAWN</>
    // },
    // {
    //     id: 10,
    //     link: '/lore/10',
    //     title: <>Chapter 10<br/> THE MIGHTY HAS<br/> FALLEN</>
    // },
    // {
    //     id: 11,
    //     link: '/lore/11',
    //     title: <>Chapter 11<br/> PERILOUS ESCAPE</>
    // },
    // {
    //     id: 12,
    //     link: '/lore/12',
    //     title: <>Chapter 12<br/> THE FINAL AWAKENING</>
    // },
]

const Content = ({data}) => {
    const [isChapterLoading, setIsChapterLoading] = useState(true);

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

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsChapterLoading(false), 1000);
    }, [isChapterLoading]);

    if (isChapterLoading) {
        return (
            <section className="loading-wrap">
                <img src={iconLoading} alt="Loading"/>
            </section>
        )
    }

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
                                            <Link to={link} className="dropdown-item"
                                                  onClick={() => setIsChapterLoading(true)} key={id}>
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
                                  onClick={() => setIsChapterLoading(true)}  className={!prevChapterLink ? 'hide' : ''}>
                                <span className="bg">
                                    <LorePrevChapterBg/>
                                </span>
                                <span className="text">
                                    <p>{`Chapter ${prevChapterLink}`}</p>
                                    <h5>{prevChapterTitle}</h5>
                                </span>
                            </Link>
                            <Link to={`/lore/${nextChapterLink}`} data-aos="fade-left" data-aos-delay="0"
                                  onClick={() => setIsChapterLoading(true)} className={!nextChapterLink ? 'hide' : ''}>
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
