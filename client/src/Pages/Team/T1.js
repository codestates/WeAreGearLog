import React from 'react';
import './T1.css';
import t1 from '../../Img/team/t1.png';
import faker from '../../Img/team/USER/faker.png';
import canna from '../../Img/team/USER/canna.png';
import oner from '../../Img/team/USER/oner.png';
import teddy from '../../Img/team/USER/teddy.png';
import keria from '../../Img/team/USER/keria.png';
import gumayusi from '../../Img/team/USER/gumayusi.png';

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

              <a href="https://www.amazon.com/Razer-DeathAdder-Gaming-Mouse-Programmable/dp/B082G5SPR5/ref=sr_1_3?crid=2PETUH095HVMP&keywords=deathadder+mouse&qid=1636185747&sprefix=death+adder%2Caps%2C327&sr=8-3">
                Mouse :Razer DeathAdder
              </a>
              <br />
              <a href="https://www.amazon.com/Razer-BlackWidow-HyperSpeed-Wireless-Mechanical/dp/B0935JBWTN/ref=sr_1_1_sspa?keywords=razer+blackwidow+v3&qid=1636186102&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMDBTUDJWQjZSSTFPJmVuY3J5cHRlZElkPUEwOTEyNTg0MjFIQ0ZXUkhWTThUVyZlbmNyeXB0ZWRBZElkPUEwMTEzODQyMjZLVVAzQUJWS0U0NCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">
                Keyboard : Razer blackwidow v3
              </a>
              <br />

              <br />
            </div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">CANNA</div>
            <div className="theback">
              <img src={canna} alt="" />
              <div className="user-name">CANNA</div>
              <a href="https://www.amazon.com/Logitech-LIGHTSPEED-Wireless-Gaming-Mouse/dp/B07CMS5Q6P/ref=sr_1_4?keywords=g304&qid=1636186538&sr=8-4">
                Mouse : Logitech G304
              </a>
              <br />
              <a href="https://www.amazon.com/Varmilo-VA108M-Beijing-Opera-Full/dp/B08GVN62S4/ref=sr_1_3?keywords=va108m&qid=1636186407&sr=8-3">
                Keyboard : Varmilo va108m
              </a>
              <br />

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
              <img src={oner} />
              <div className="user-name">ONER</div>
              <a href="https://www.amazon.com/Logitech-Wireless-Gaming-Esports-Performance/dp/B07GCKQD77/ref=sr_1_3?keywords=g+pro+mouse&qid=1636187549&sr=8-3">
                Mouse : Logitech G Pro
              </a>
              <br />
              <a href="https://www.amazon.com/Logitech-Tenkeyless-Lightspeed-Mechanical-LIGHTSYNC/dp/B085RFFC9Q/ref=sr_1_7?keywords=gprox&qid=1636186905&sr=8-7">
                keyboard :Logitech GproX
              </a>
              <br />
            </div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">TEDDY</div>
            <div className="theback">
              {' '}
              <img src={teddy} />
              <div className="user-name">TEDDY</div>
              <a href="https://www.amazon.com/Logitech-LIGHTSPEED-Wireless-Gaming-Mouse/dp/B07CMS5Q6P/ref=sr_1_4?keywords=g304&qid=1636186538&sr=8-4">
                Mouse : Logitech G304
              </a>
              <br />
              <a href="https://www.amazon.com/Razer-BlackWidow-HyperSpeed-Wireless-Mechanical/dp/B0935JBWTN/ref=sr_1_1_sspa?keywords=razer+blackwidow+v3&qid=1636186102&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMDBTUDJWQjZSSTFPJmVuY3J5cHRlZElkPUEwOTEyNTg0MjFIQ0ZXUkhWTThUVyZlbmNyeXB0ZWRBZElkPUEwMTEzODQyMjZLVVAzQUJWS0U0NCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">
                keyboard : Razer blackwidow v3
              </a>
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
              <img src={keria} />
              <div className="user-name">KERIA</div>
              <a href="https://www.amazon.com/Logitech-Wireless-Gaming-Esports-Performance/dp/B07GCKQD77/ref=sr_1_3?keywords=g+pro+mouse&qid=1636187549&sr=8-3">
                Mouse : Logitech G Pro
              </a>
              <br />
              <a href="https://www.amazon.com/CORSAIR-RAPIDFIRE-Mechanical-Gaming-Keyboard/dp/B07PRT1873/ref=sr_1_1?keywords=%3ACorsare+k70+mk2&qid=1636187621&sr=8-1">
                Keyboard :Corsare k70 mk2
              </a>
              <br />
            </div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront-g">GUMAYUSI</div>
            <div className="theback">
              <img src={gumayusi} />
              <div className="user-name">GUMAYUSI</div>
              <a href="https://www.amazon.com/Razer-DeathAdder-Gaming-Mouse-Programmable/dp/B082G5SPR5/ref=sr_1_3?crid=2PETUH095HVMP&keywords=deathadder+mouse&qid=1636185747&sprefix=death+adder%2Caps%2C327&sr=8-3">
                Mouse :Razer DeathAdder
              </a>
              <br />
              <a href="https://www.amazon.com/Leopold-FC750R-High-end-Mechanical-Keyboard/dp/B079JSYH7X/ref=sr_1_3?crid=15MYUTF7L463W&keywords=leopold+keyboard+750r&qid=1636187668&sprefix=leopold+keyboard+7%2Caps%2C322&sr=8-3">
                Keyboard :leopold keyboard 750r
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T1;
