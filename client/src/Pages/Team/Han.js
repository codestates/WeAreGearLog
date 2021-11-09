import React from 'react';
import './Han.css';
import han from '../../Img/team/han.png';
import faker from '../../Img/team/USER/faker.png';
import morgan from '../../Img/team/USER/morgan.jpg';
import vsta from '../../Img/team/USER/vsta.jpg';
import deft from '../../Img/team/USER/deft.jpg';
import will from '../../Img/team/USER/wil.jpg';
import chovy from '../../Img/team/USER/chovy.jpg';

const Han = () => {
  return (
    <div className="hanfather">
      <div className="hanTeam-Header">
        <img src={han} alt="" /> LEAGUE OF LEAGEND
      </div>
      <div className="hanboxs">
        <div className="hanmaincontainer">
          <div className="hanthecard">
            <div className="hanthefront">Morgan</div>
            <div className="hantheback">
              <img src={morgan} />
              <div className="hanuser-name">Morgan</div>

              <a>Mouse :none</a>
              <br />
              <a>keyboard :none</a>
              <br />
            </div>
          </div>
        </div>

        <div className="hanmaincontainer">
          <div className="hanthecard">
            <div className="hanthefront">Willer</div>
            <div className="hantheback">
              <img src={will} />
              <div className="hanuser-name">Willer</div>
              <a>Mouse : none</a>
              <br />
              <a>Keyboard :none</a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="hanboxs">
        <div className="hanmaincontainer">
          <div className="hanthecard">
            <div className="hanthefront">Chovy</div>
            <div className="hantheback">
              <img src={chovy} />
              <div className="hanuser-name">Chovy</div>
              <a href="https://www.amazon.com/Logitech-Wireless-Gaming-Esports-Performance/dp/B07GCKQD77/ref=sr_1_2?keywords=Logitech+Pro+mouse&qid=1636195505&sr=8-2">
                Mouse :Logitech G Pro
              </a>
              <br />
              <a href="https://www.amazon.com/CORSAIR-MK-2-Mechanical-Gaming-Keyboard/dp/B07D5S54C6/ref=sr_1_1?crid=1YE42405EFJ6G&keywords=corsair+mk.2&qid=1636195546&sprefix=Corsair+Mk.2%2Caps%2C321&sr=8-1">
                keyboard : Corsair MK.2 SE
              </a>
              <br />
            </div>
          </div>
        </div>

        <div className="hanmaincontainer">
          <div className="hanthecard">
            <div className="hanthefront">Deft</div>
            <div className="hantheback">
              <img src={deft} />
              <div className="hanuser-name">Deft</div>
              <a href="https://www.amazon.com/Logitech-Wireless-Gaming-Esports-Performance/dp/B07GCKQD77/ref=sr_1_2?keywords=Logitech+Pro+mouse&qid=1636195505&sr=8-2">
                Mouse :Logitech G Pro
              </a>
              <br />
              <a href="https://www.amazon.com/CORSAIR-MK-2-Mechanical-Gaming-Keyboard/dp/B07D5S54C6/ref=sr_1_1?crid=1YE42405EFJ6G&keywords=corsair+mk.2&qid=1636195546&sprefix=Corsair+Mk.2%2Caps%2C321&sr=8-1">
                keyboard : Corsair MK.2 SE
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="hanboxs">
        <div className="hanmaincontainer">
          <div className="hanthecard">
            <div className="hanthefront">Vsta</div>
            <div className="hantheback">
              <img src={vsta} />
              <div className="hanuser-name">Vsta</div>
              <a>Mouse :none</a>
              <br />
              <a>Keyboard :none</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Han;
