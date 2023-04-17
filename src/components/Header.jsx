import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="./logo.svg" alt="logo space" />
            </div>

            <nav className="header__nav">
                <div className="header__line"></div>
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink 
                            to="/" 
                            rel="noreferrer noopener"
                            className={`hover ${(ul) =>
                                ul.isActive ? 'active ' : ''}`}
                            >
                            <span>00</span> Home
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to="/destination">
                            <span>01</span> Destination
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/crew"
                            className='hover'
                        >
                            <span>02</span> Crew
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/technology"
                            rel="noreferrer"
                            className="hover"
                        >
                            <span>03</span> Technology
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
