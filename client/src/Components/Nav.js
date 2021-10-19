/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';

import { FaUserCircle } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = ({ showSidebar }) => {
  const history = useHistory();

  return (
    <div>
      <div className="nav-userinfo">
        <i className="hamburgur">
          <GiHamburgerMenu size={30} />
        </i>

        <div>
          <Link to="/">
            <a className="Logo-name">GEARLOG</a>
          </Link>
        </div>
        <li className="nav-pad-1">브랜드</li>
        <li className="nav-pad-1">게이머장비</li>
        <li className="nav-pad-1">게시판</li>
        <div>
          <i className="icons">
            <RiSearchLine />
          </i>
          <i className="icons" onClick={() => history.push('/account/login')}>
            <FaUserCircle />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
