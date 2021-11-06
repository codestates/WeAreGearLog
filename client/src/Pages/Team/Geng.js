import React from 'react';
import './Geng.css';
import t1 from '../../Img/team/geng.png';
import faker from '../../Img/team/USER/faker.png';
import life from '../../Img/team/USER/life.jpg';
import bdd from '../../Img/team/USER/bdd.jpg';
import rascal from '../../Img/team/USER/rascal.jpg';
import ruler from '../../Img/team/USER/ruler.jpg';
import clid from '../../Img/team/USER/clid.jpg';

const T1 = () => {
  return (
    <div className="gfather">
      <div className="gTeam-Header">
        <img src={t1} alt="" /> LEAGUE OF LEAGEND
      </div>
      <div className="gboxs">
        <div className="gmaincontainer">
          <div className="gthecard">
            <div className="gthefront">Rascal</div>
            <div className="gtheback">
              <img src={rascal} />
              <div className="guser-name">Rascal</div>

              <a href="https://www.amazon.com/Logitech-Spectrum-Shifting-Personalized-Programmable/dp/B019OB663A/ref=sr_1_1_sspa?keywords=logitech+g502&qid=1636192786&sr=8-1-spons&psc=1&smid=A124H265Y5RGCX&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3UFpZMjM5STlONkMmZW5jcnlwdGVkSWQ9QTAwNjM2MzRCQ0RFWjdWM1FFSTAmZW5jcnlwdGVkQWRJZD1BMDk5ODU5NDJFSjlNNjQ4VzBMTVomd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl">
                Mouse :Logitech G502
              </a>
              <br />
              <a href="https://www.amazon.com/Logitech-Mechanical-Keyboard-Romer-G-Tactile/dp/B07L6JVJCX/ref=sr_1_1?keywords=logitech+g512&qid=1636192749&sprefix=Logi%2Caps%2C373&sr=8-1">
                keyboard : Logitech G512
              </a>
              <br />
            </div>
          </div>
        </div>

        <div className="gmaincontainer">
          <div className="gthecard">
            <div className="gthefront">Clid</div>
            <div className="gtheback">
              <img src={clid} />
              <div className="guser-name">Clid</div>
              <a href="https://www.amazon.com/Logitech-Mechanical-Keyboard-Romer-G-Tactile/dp/B07L6JVJCX/ref=sr_1_1?keywords=logitech+g512&qid=1636192749&sprefix=Logi%2Caps%2C373&sr=8-1">
                Mouse : Logitech G512
              </a>
              <br />
              <a href="https://www.amazon.com/Logitech-Backlit-Mechanical-Keyboard-Keyswitches/dp/B082XLK136/ref=sr_1_1_sspa?keywords=logitech+g513&qid=1636192819&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFSTlY0UktBNEJZTUomZW5jcnlwdGVkSWQ9QTA5NTUyNjAxRkNYV0NUNUIxT0RBJmVuY3J5cHRlZEFkSWQ9QTA2NDI1MTgzNEcyR1EyTzFUR1dTJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">
                Keyboard : Logitech G513
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="gboxs">
        <div className="gmaincontainer">
          <div className="gthecard">
            <div className="gthefront">Bdd</div>
            <div className="gtheback">
              <img src={bdd} />
              <div className="guser-name">Bdd</div>
              <a href="https://www.amazon.com/Logitech-Spectrum-Shifting-Personalized-Programmable/dp/B019OB663A/ref=sr_1_1_sspa?keywords=g502&qid=1636192838&sr=8-1-spons&psc=1&smid=A124H265Y5RGCX&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTVdCODVRV0UzSUFPJmVuY3J5cHRlZElkPUEwMzA1NDQzMjBUU1lFV1JSMURNRCZlbmNyeXB0ZWRBZElkPUEwOTk4NTk0MkVKOU02NDhXMExNWiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">
                Mouse :Logitech G502
              </a>
              <br />
              <a href="https://www.amazon.com/Logitech-Mechanical-Tenkeyless-Detachable-LIGHTSYNC/dp/B07QQB9VCV/ref=sr_1_3?keywords=Logitech+Pro+keyboard&qid=1636192853&sr=8-3">
                keyboard :Logitech Pro keyboard
              </a>
              <br />
            </div>
          </div>
        </div>

        <div className="gmaincontainer">
          <div className="gthecard">
            <div className="gthefront">Ruler</div>
            <div className="gtheback">
              <img src={ruler} />
              <div className="guser-name">Ruler</div>
              <a href="https://www.amazon.com/Logitech-Lightspeed-Lightsync-Compatible-Lightweight/dp/B07NSSPV9S/ref=sr_1_1?keywords=Logitech+G703&qid=1636192870&sr=8-1">
                Mouse : Logitech G703
              </a>
              <br />
              <a href="https://www.amazon.com/Logitech-Backlit-Mechanical-Keyboard-Keyswitches/dp/B082XLK136/ref=sr_1_1_sspa?keywords=Logitech+G513&qid=1636192897&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVTRMSVIxS1A4WDQmZW5jcnlwdGVkSWQ9QTAyMDMxNzgxR1BKOENEUUtDQ1oxJmVuY3J5cHRlZEFkSWQ9QTA2NDI1MTgzNEcyR1EyTzFUR1dTJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">
                Keyboard : Logitech G513
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="gboxs">
        <div className="gmaincontainer">
          <div className="gthecard">
            <div className="gthefront">Life</div>
            <div className="gtheback">
              <img src={life} />
              <div className="guser-name">Life</div>
              <a href="https://www.amazon.com/Logitech-Lightspeed-Lightsync-Compatible-Lightweight/dp/B07NSSPV9S/ref=sr_1_1?keywords=Logitech+G703&qid=1636192921&sr=8-1">
                Mouse : Logitech G703
              </a>
              <br />
              <a href="https://www.amazon.com/Logitech-Backlit-Mechanical-Keyboard-Keyswitches/dp/B082XLK136/ref=sr_1_1_sspa?keywords=Logitech+G513&qid=1636192897&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVTRMSVIxS1A4WDQmZW5jcnlwdGVkSWQ9QTAyMDMxNzgxR1BKOENEUUtDQ1oxJmVuY3J5cHRlZEFkSWQ9QTA2NDI1MTgzNEcyR1EyTzFUR1dTJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">
                Keyboard : Logitech G513
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
