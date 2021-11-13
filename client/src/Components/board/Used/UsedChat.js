import { useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './UserChat.css';
const UsedChat = ({ chatO, postLogout, modal, setModal }) => {
  const history = useHistory();

  const outsideRef = useRef(null);
  const useOutsideClick = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setModal(!modal);
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
    <div ref={outsideRef} className="userinfo1">
      <li onClick={chatO} className="userinfo-mypage1">
        1:1채팅신청
      </li>
    </div>
  );
};

export default UsedChat;
