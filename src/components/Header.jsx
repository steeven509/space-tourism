import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
       <div className="header">
          <div className="header__logo">
              <img src="./logo.svg" alt="logo space" />
          </div>
          

          <nav className='header__nav'>
            <div className="header__line"></div>
              <ul className="header__list">
                 <li className="header__item"> 
                     <NavLink exact 
                        activeClassName="active" to="/"
                        rel='noreferrer noopener'
                        className="hover" >
                         <span>00</span> Home
                     </NavLink></li>
                 <li className="header__item">
                     <NavLink activeClassName="active" 
                         to="/destination"
                         className="hover">
                         <span>01</span> Destination
                      </NavLink></li>
                 <li className="header__item">
                     <NavLink activeClassName="active" 
                         to="/crew"
                         className="hover">
                         <span>02</span> Crew
                     </NavLink></li>
                 <li className="header__item">
                     <NavLink activeClassName="active" 
                         to="/technology"
                         rel='noreferrer'
                         className="hover">
                         <span>03</span> Technology
                     </NavLink></li>
              </ul>
          </nav>  

       </div>
    );
};

export default Header;