import React from 'react';
import './FlipCards.css';

const T1 = [
  {
    id: 0,
    profile: '',
    intro: '12312312312',
    user: 'FAKER',
    keboard: '123',
    mouse: '321',
  },
  {
    id: 1,
    intro: '12312312312',
    user: 'FAKER',
    keboard: '123',
    mouse: '321',
  },
  {
    id: 2,
    intro: '12312312312',
    user: 'FAKER',
    keboard: '123',
    mouse: '321',
  },
  {
    id: 3,
    intro: '12312312312',
    user: 'FAKER',
    keboard: '123',
    mouse: '321',
  },
  {
    id: 4,
    intro: '12312312312',
    user: 'FAKER',
    keboard: '123',
    mouse: '321',
  },
];

const FlipCards = () => {
  return (
    <div className="father">
      <div className="boxs">
        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">front of card</div>
            <div className="theback">back of card</div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">front of card</div>
            <div className="theback">back of card</div>
          </div>
        </div>
      </div>
      <div className="boxs">
        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">front of card</div>
            <div className="theback">back of card</div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">front of card</div>
            <div className="theback">back of card</div>
          </div>
        </div>
      </div>
      <div className="boxs">
        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">front of card</div>
            <div className="theback">back of card</div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">front of card</div>
            <div className="theback">back of card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
