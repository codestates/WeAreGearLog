import React, { useRef, useEffect } from 'react';
import dw from '../Img/team/dwkia.png';
import t1 from '../Img/team/t1.png';
import geng from '../Img/team/geng.png';
import ns from '../Img/team/ns.png';
import liv from '../Img/team/liv.png';
import af from '../Img/team/af.png';
import han from '../Img/team/han.png';
import drx from '../Img/team/drx.png';
import kt from '../Img/team/kt.png';
function useOutsideClick(ref) {
  useEffect(() => {
    console.log(`useEffect()`);

    function handleClickOutside(event) {}

    // 현재 document에 이벤트리스너를 추가합니다.
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default function Dropdown() {
  // useRef를 사용하여 ref를 생성합니다.
  // null로 초기화합니다.
  const outsideRef = useRef(null);
  useOutsideClick(outsideRef);

  // 최초 실행시 null임을 확인할 수 있습니다.
  console.log(outsideRef);

  return (
    <div ref={outsideRef} className="select">
      <form>
        <span> 게이머 기어</span>
        <div className="Team-select">
          <img src={dw}></img>
          <img src={t1}></img>
          <img src={geng}></img>
          <img src={ns}></img>
          <img src={kt}></img>
          <img src={han}></img>
          <img src={drx}></img>
          <img src={af}></img>
          <img src={liv}></img>
        </div>
      </form>
    </div>
  );
}
