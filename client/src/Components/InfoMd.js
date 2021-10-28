import { useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

const InfoMd = ({ postLogout, isOpen, setIsOpen }) => {
  const history = useHistory();
  const modalFalse = () => {
    setIsOpen(!isOpen);
  };

  const outsideRef = useRef(null);
  const useOutsideClick = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(!isOpen);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideClick(outsideRef);
  return (
    <div ref={outsideRef} onClick={modalFalse} className="userinfo">
      <li
        onClick={() => history.push('/account/mypage')}
        className="userinfo-mypage"
      >
        계정
      </li>

      <li onClick={() => postLogout()} className="userinfo-mypage">
        로그아웃
      </li>
    </div>
  );
};

export default InfoMd;
