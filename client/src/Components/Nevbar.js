import { useState, useRef, useEffect } from 'react';

import Popover from '@mui/material/Popover';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './common/SidebarData';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import InfoMd from './InfoMd';
import HoverModal from './Dropdown';
import Dropdown from './Dropdown';

const NavBar = ({ isLogin, setIsLogin, setAuthRegi, authRegi }) => {
  const modalFalse = () => {
    setIsOpen(!isOpen);
  };

  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  console.log(isOpen);
  useEffect(() => {
    setIsOpen(true);
  }, [isLogin]);

  const postLogout = () => {
    return axios
      .get(
        'http://52.79.233.29:8080/user/logout',
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.data.message === '로그아웃 성공') {
          localStorage.clear();
          setAuthRegi({
            email: '',
            username: '',
            password: '',
            passwordCornfirm: '',
          });

          setIsLogin(false);

          alert('로그아웃되었습니다');
          history.push('/');
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          alert('로그아웃이 되지않았습니다');
        }
      });
  };

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

            {/* <Dropdown className="nav-pad-1" /> */}

            <li className="nav-pad-1">게시판</li>
          </div>

          <div>
            {!isLogin ? (
              <i
                className="icons"
                onClick={() => history.push('/account/login')}
              >
                <FaUserCircle />
              </i>
            ) : (
              <i>
                {
                  <div className="icons2" onClick={() => setIsOpen(!isOpen)}>
                    <div>{authRegi.username} ▿</div>
                  </div>
                }
              </i>
            )}
            {isLogin && !isOpen ? (
              <InfoMd
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                postLogout={postLogout}
              />
            ) : null}
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
                    <hr></hr>
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
