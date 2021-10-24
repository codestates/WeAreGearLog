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

    function handleClickOutside(event) {
      console.log(ref);

      // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(`select의 외부 클릭을 감지!`);
      }
    }

    // 현재 document에 이벤트리스너를 추가합니다.
    document.addEventListener('mousedown', handleClickOutside);

    // useEffect 함수가 return하는 것은 마운트 해제하는 것과 동일합니다.
    // 즉, Class 컴포넌트의 componentWillUnmount 생명주기와 동일합니다.
    // 더 이상'mousedown'이벤트가 동작하더라도 handleClickOutside 함수가 실행되지 않습니다.
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]); // ref가 변경되면 useEffect를 다시 생성합니다.
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
