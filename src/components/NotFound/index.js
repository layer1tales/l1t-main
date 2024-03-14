import React from 'react';
import {Link} from "react-router-dom";

import scss from './notfound.module.scss';

const NotFound = () => (
    <main>
        <section className={scss.notfoundSection}>
            <h2>404</h2>
            <p>Not Found</p>
            <Link to="/" className={scss.link}>
                Go home
            </Link>
        </section>
    </main>
)

export default NotFound;
