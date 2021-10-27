import React from 'react';
import './ReviewTemp.css';
import { FcDocument, FcElectricalSensor } from 'react-icons/fc';
import g304ti from '../../../Img/brands/6143-1.png';
const ReviewTemp = () => {
  return (
    <div className="Rv-temp">
      <div className="Rv-temp-page">
        <div className="Rv-temp-title">
          <FcDocument size="40" />
          Logitech g304 Review
        </div>
        <div className="Rv-temp-headline">
          <div className="Rv-temp-intro">
            <div className="Rv-temp-headline-1">
              <h1 className="Rv-temp-title1"> Logitech g304 Review</h1>
            </div>
            <p className="Rv-text">
              로지텍 g304 무선 게이밍마우스는 g102 모델과 디자인이 거의같은
              무선제품입니다 무선이지만 절대 유선이라고 느낄수있는 응답속도를
              가지고있습니다. 평소 가볍게 게임을 즐기는 라이트 유저들에게
              가격면에서도 접근하기 좋은 무선마우스라 평가받습니다.
            </p>
          </div>
          <div className=".main-review">
            <img className="title-img" src={g304ti} alt=""></img>
          </div>
        </div>

        <div className="Rv-temp-headline">
          <div className="Rv-temp-intro">
            <h1 className="Rv-temp-title1"> Gear InterView</h1>
            <p className="Rv-text">
              사람이 게임을 하면서 반응하는 데에는 분명 0.001초는 커녕 0.008초
              이상이 걸리고 이는 눈으로 본 게 뇌로 전달 손이나 발을 움직이라는
              신호가 지나는 신호 수준이 아닐까 합니다만, 4GHz로 동작하는 CPU의
              캐시 메모리에서 정보를 엿볼 수 있는 오늘에서 보자면 사람 기준이
              아니라 레이턴시라고 하는 기기 입장에서 생각해 보면 이러한 지연을
              1ms(0.001초)라고 줄여보고자 하는 로지텍의 집념을 느끼실 수 있지
              않으실까 합니다. <br></br>
              <div className="interview"> -프로게이머 김동찬-</div>
            </p>
          </div>
          <div className="Rv-temp-introp">
            <li>
              <FcElectricalSensor size="20" /> HERO 센서
            </li>
            <li>
              <FcElectricalSensor size="20" /> 최대 12,000DPI
            </li>
            <li>
              <FcElectricalSensor size="20" /> 6 개 버튼 완벽하게 프로그래밍
              가능
            </li>
            <li>
              <FcElectricalSensor size="20" /> 1ms 보고율
            </li>
          </div>
        </div>
        <div className="Rv-temp-headline">
          <div className="Rv-temp-intro">
            <h1 className="Rv-temp-title1"> 기어로그 최종리뷰</h1>
            <hr></hr>
            <p className="Rv-text">
              g304 "lightspeed" 시리즈의 경우 항상 지켜온 기본적인 마우스의
              형태와 커스텀할수 있는 디자인, 경쾌한 움직임으로 누구에게나 최상의
              퍼포먼스를 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTemp;
