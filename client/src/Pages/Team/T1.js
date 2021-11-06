import React from 'react';
import './T1.css';
import t1 from '../../Img/team/t1.png';
import faker from '../../Img/team/USER/faker.png';

const T1 = () => {
  return (
    <div className="father">
      <div className="Team-Header">
        <img src={t1} alt="" /> LEAGUE OF LEAGEND
      </div>
      <div className="boxs">
        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">FAKER</div>
            <div className="theback">
              <img src={faker} />
              <div className="user-name">FAKER</div>

              <a>Mouse :</a>
              <br />
              <a>keyboard :</a>
              <br />
              <a>Monitor :</a>
              <br />
            </div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">CANNA</div>
            <div className="theback">
              <img src={faker} />
              <div className="user-name">CANNA</div>
              <a>Mouse :</a>
              <br />
              <a>keyboard :</a>
              <br />
              <a>Monitor :</a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="boxs">
        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">ONER</div>
            <div className="theback">
              {' '}
              <img src={faker} />
              <div className="user-name">ONER</div>
              <a>Mouse :</a>
              <br />
              <a>keyboard :</a>
              <br />
              <a>Monitor :</a>
              <br />
            </div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">TEDDY</div>
            <div className="theback">
              {' '}
              <img src={faker} />
              <div className="user-name">TEDDY</div>
              <a>Mouse :</a>
              <br />
              <a>keyboard :</a>
              <br />
              <a>Monitor :</a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="boxs">
        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">KERIA</div>
            <div className="theback">
              {' '}
              <img src={faker} />
              <div className="user-name">KERIA</div>
              <a>Mouse :</a>
              <br />
              <a>keyboard :</a>
              <br />
              <a>Monitor :</a>
              <br />
            </div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">GUMAYUSI</div>
            <div className="theback">
              {' '}
              <img src={faker} />
              <div className="user-name">GUMAYUSI</div>
              <a>Mouse :</a>
              <br />
              <a>keyboard :</a>
              <br />
              <a>Monitor :</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T1;
