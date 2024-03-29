import React, { useState, useContext } from 'react';
import { HiMenu, HiLogout } from 'react-icons/hi'

import '../Sidebar/Sidebar.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const { logoutUser } = useContext(AuthContext)
  

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const toggleCollapse = (event) => {
    event.currentTarget.nextElementSibling.classList.toggle('showCollapse');
    event.currentTarget.classList.toggle('rotate');
  };

  const setActiveLink = (event) => {
    const links = document.querySelectorAll('.nav__link');
    links.forEach((link) => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
  };

  return (
    <div className={`l-navbar ${expanded ? 'expander' : ''}`} id="navbar">
      <nav className="nav">
        <div>
          <div className="nav__brand xs:pl-2 xs:space-x-6">
           
            <HiMenu name="menu-outline"
             fontSize={30}
              onClick={toggleMenu} />
            <a href="/" className="nav__logo">
              Cath-Locate
            </a>
          </div>
          <div className="nav__list">
            <Link
              to={'/dashboard'}
              className="nav__link active"
              onClick={setActiveLink}
              >
              <HiMenu name="home-outline" className="nav__icon"/>
              <span className="nav__name">Dashboard</span>
            </Link> 
            
           
            {/* <div className="nav__link collapse" onClick={toggleCollapse}>
              <IonIcon
                name="people-outline"
                className="nav__icon"
              ></IonIcon>
              <HiMenu/>
              <span className="nav__name">Team</span>

              <IonIcon
                name="chevron-down-outline"
                className="collapse__link"
              ></IonIcon>
              <HiMenu/>

              <ul className="collapse__menu">
                <a href="#" className="collapse__sublink">
                  Data
                </a>
                <a href="#" className="collapse__sublink">
                  Group
                </a>
                <a href="#" className="collapse__sublink">
                  Members
                </a>
              </ul>
            </div> */}
            <Link to={'/dashboard/churches'} className='nav__link' onClick={setActiveLink}>
              <HiMenu name="settings-outline" className="nav__icon" />
              <span className="nav__name">Settings</span>
            </Link>
          </div>
        </div>

        <div className='nav__link' onClick={logoutUser}>
          <HiLogout name="log-out-outline" className="nav__icon xs:text-red-600" />
          <span className="nav__name">Log Out</span>
        </div>
      </nav>
    </div>
  );
};

