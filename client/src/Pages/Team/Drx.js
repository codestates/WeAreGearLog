import React from 'react';
import './Drx.css';
import drx from '../../Img/team/drx.png';
import faker from '../../Img/team/USER/faker.png';
import pyosik from '../../Img/team/USER/pyosik.png';
import solka from '../../Img/team/USER/solka.png';
import kingen from '../../Img/team/USER/kingen.png';
import becca from '../../Img/team/USER/Becca.png';
import bao from '../../Img/team/USER/bao.png';

const Drx = () => {
  return (
    <div className="dfather">
      <div className="dTeam-Header">
        <img src={drx} alt="" /> LEAGUE OF LEAGEND
      </div>
      <div className="dboxs">
        <div className="dmaincontainer">
          <div className="dthecard">
            <div className="dthefront">Kingen</div>
            <div className="dtheback">
              <img src={kingen} />
              <div className="duser-name">Kingen</div>

              <a>Mouse :none</a>
              <br />
              <a>keyboard :none</a>
              <br />
            </div>
          </div>
        </div>

        <div className="dmaincontainer">
          <div className="dthecard">
            <div className="dthefront">Pyosik</div>
            <div className="dtheback">
              <img src={pyosik} />
              <div className="duser-name">Pyosik</div>
              <a href="https://www.amazon.com/Logitech-Wireless-Gaming-Esports-Performance/dp/B07GCKQD77/ref=sr_1_3?crid=WSDDQEKQGICH&keywords=g+pro+wireless&qid=1636197149&sprefix=G+pro+w%2Caps%2C336&sr=8-3">
                Mouse : Logitech Gpro Wl
              </a>
              <br />
              <a href="https://www.amazon.com/ABKO-Premium-Optical-Waterproof-Injection/dp/B07QTK33J2/ref=sr_1_4?keywords=abko+k660&qid=1636197283&sr=8-4">
                keyboard : ABKO K660
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="dboxs">
        <div className="dmaincontainer">
          <div className="dthecard">
            <div className="dthefront">SOLKA</div>
            <div className="dtheback">
              <img src={solka} />
              <div className="duser-name">SOLKA</div>
              <a>Mouse :none</a>
              <br />
              <a>keyboard :none</a>
              <br />
            </div>
          </div>
        </div>

        <div className="dmaincontainer">
          <div className="dthecard">
            <div className="dthefront">BAO</div>
            <div className="dtheback">
              {' '}
              <img src={bao} />
              <div className="duser-name">BAO</div>
              <a>Mouse :none</a>
              <br />
              <a>keyboard :none</a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="dboxs">
        <div className="dmaincontainer">
          <div className="dthecard">
            <div className="dthefront">Becca</div>
            <div className="dtheback">
              <img src={becca} />
              <div className="duser-name">Becca</div>
              <a>Mouse :none</a>
              <br />
              <a>keyboard :none</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drx;
