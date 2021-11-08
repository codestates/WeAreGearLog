import React from 'react';
import './Dk.css';
import dk from '../../Img/team/dwkia.png';
import world from '../../Img/team/world.jpg';
import khan from '../../Img/team/USER/khan.png';
import be from '../../Img/team/USER/be.png';
import ghost from '../../Img/team/USER/ghost.png';
import mal from '../../Img/team/USER/mal.png';
import show from '../../Img/team/USER/show.png';
import cany from '../../Img/team/USER/cany.png';

const Dk = () => {
  return (
    <div className="dkfather">
      <div className="dkTeam-Header">
        <img src={dk} alt="" /> LEAGUE OF LEAGEND
      </div>
      <div className="dkboxs">
        <div className="dkmaincontainer">
          <div className="dkthecard">
            <div className="dkthefront">Khan</div>
            <div className="dktheback">
              <img src={khan} />
              <div className="dkuser-name">Khan</div>

              <a href="https://www.amazon.com/Logitech-Wireless-Gaming-Esports-Performance/dp/B07GCKQD77/ref=sr_1_3?crid=3IZV538VDCJAK&keywords=g+pro+wireless&qid=1636188075&sprefix=g+pro+%2Caps%2C332&sr=8-3">
                Mouse :Logitech G-PRo Wr
              </a>
              <br />
              <a href="https://www.amazon.com/Logitech-LIGHTSYNC-Mechanical-Keyboard-Switches/dp/B07QHMJYFJ/ref=sr_1_3?keywords=g-512+gx&qid=1636190971&sr=8-3">
                Keyboard : Logitech G-512 Gx Blue
              </a>
              <br />
            </div>
          </div>
        </div>

        <div className="dkmaincontainer">
          <div className="dkthecard">
            <div className="dkthefront">Canyon</div>
            <div className="dktheback">
              <img src={cany} />
              <div className="dkuser-name">Canyon</div>
              <a href="https://www.amazon.com/Logitech-PRO-Hero-Gaming-Mouse/dp/B07GC4W25L/ref=sr_1_1?keywords=g+pro+hero&qid=1636190908&sr=8-1">
                Mouse : Logitech G-pro Hero
              </a>
              <br />
              <a href="https://www.amazon.com/Logitech-Mechanical-Tenkeyless-Detachable-LIGHTSYNC/dp/B07QQB9VCV/ref=sr_1_1?keywords=Logitech+G512+GX+RED&qid=1636191091&sr=8-1">
                Keyboard : Logitech G512 GX RED
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="dkboxs">
        <div className="dkmaincontainer">
          <div className="dkthecard">
            <div className="dkthefront">Malrang</div>
            <div className="dktheback">
              <img src={mal} />
              <div className="dkuser-name">Malrang</div>
              <a>Mouse :none</a>
              <br />
              <a>keyboard : none</a>
              <br />
            </div>
          </div>
        </div>

        <div className="dkmaincontainer">
          <div className="dkthecard">
            <div className="dkthefront1">ShowMaker</div>
            <div className="dktheback">
              <img src={show} />
              <div className="dkuser-name">ShowMaker</div>
              <a href="https://www.amazon.com/Logitech-PRO-Hero-Gaming-Mouse/dp/B07GC4W25L/ref=sr_1_1?keywords=g+pro+hero&qid=1636190908&sr=8-1">
                Mouse : Logitech G-pro Hero
              </a>
              <br />
              <a>Keyboard : Logitech G-pro X</a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="dkboxs">
        <div className="dkmaincontainer">
          <div className="dkthecard">
            <div className="dkthefront">Ghost</div>
            <div className="dktheback">
              <img src={ghost} />
              <div className="dkuser-name">Ghost</div>
              <a href="https://www.amazon.com/Logitech-Wireless-Gaming-Esports-Performance/dp/B07GCKQD77/ref=sr_1_3?crid=3IZV538VDCJAK&keywords=g+pro+wireless&qid=1636188075&sprefix=g+pro+%2Caps%2C332&sr=8-3">
                Mouse :Logitech G-PRo Wr
              </a>
              <br />
              <a href="https://www.amazon.com/Logitech-Backlit-Mechanical-Keyboard-Passthrough/dp/B06XR5MWGM/ref=sr_1_1?keywords=Logitech+G-413&qid=1636191057&sr=8-1">
                Keyboard :Logitech G-413(c)
              </a>
              <br />
            </div>
          </div>
        </div>
        <div className="dkmaincontainer">
          <div className="dkthecard">
            <div className="dkthefront">Beryl</div>
            <div className="dktheback">
              <img src={be} />
              <div className="dkuser-name">Beryl</div>
              <a href="https://www.amazon.com/Logitech-Lightspeed-Lightsync-Compatible-Lightweight/dp/B07NSSPV9S/ref=sr_1_1?crid=1NZOMZNHGT3EE&keywords=logitech+403+wireless&qid=1636191003&sprefix=logitec+g+403%2Caps%2C321&sr=8-1">
                Mouse : Logitech G-403
              </a>
              <br />
              <a href="https://www.amazon.com/Logitech-LIGHTSYNC-Mechanical-Keyboard-Switches/dp/B07QHMJYFJ/ref=sr_1_1?keywords=logitech+g-512&qid=1636191037&sr=8-1">
                Keyboard : Logitech G-512(linear)
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dk;
