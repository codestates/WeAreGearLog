import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './common/SidebarData';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';

const NavBar = () => {
  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <i>
            <Link to="#" className="menu-bars">
              <GiHamburgerMenu className="close" onClick={showSidebar} />
            </Link>
          </i>

          <Link className="Logo-name" to="/">
            GEARLOG
          </Link>
          <div className="nav-list">
            <li className="nav-pad-1">브랜드</li>
            <li className="nav-pad-1">게이머장비</li>
            <li className="nav-pad-1">게시판</li>
          </div>
          <div>
            <i className="icons">
              <RiSearchLine />
            </i>
            <i className="icons" onClick={() => history.push('/account/login')}>
              <FaUserCircle />
            </i>
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" value="" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
