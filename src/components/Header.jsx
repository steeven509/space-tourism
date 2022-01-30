import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <header className="header">
            <div className="header__logo">
                <img src="./logo.svg" alt="logo space" />
            </div>

            <nav className="header__nav">
                <div className="header__line"></div>
                <ul className="header__list">
                    <li className="header__item">
                        <Link
                            onClick={() => setIsActive(true)}
                            to="/"
                            rel="noreferrer noopener"
                            className={`hover ${isActive ? 'active' : ''}`}
                        >
                            <span>00</span> Home
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link
                            to="/destination"
                            className={`hover ${isActive ? 'active' : ''}`}
                        >
                            <span>01</span> Destination
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link
                            onClick={() => setIsActive(true)}
                            to="/crew"
                            className={`hover ${isActive ? 'active' : ''}`}
                        >
                            <span>02</span> Crew
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link
                            onClick={() => setIsActive(true)}
                            to="/technology"
                            rel="noreferrer"
                            className={`hover ${isActive ? 'active' : ''}`}
                        >
                            <span>03</span> Technology
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
