import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

import './Header.scss';

export function Header() {
    return (
        <header>
            <div className="top-bar">
                <div className="title">
                    <h1>Styl Karkonoski</h1>
                </div>
                <div className="icons-container">
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </header>
    )
}
