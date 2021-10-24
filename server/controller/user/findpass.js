const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { user, authcode } = require("../../models");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  send: async (req, res) => {
    const token = crypto.randomBytes(20).toString("base64");
    const { email } = req.body;
    const finder = await user.findOne({ where: { email: email } });
    //가입된 이메일인지 검증
    if (!finder) {
      return res.status(404).json({ message: "가입되지 않은 이메일 주소" });
    }

    //인증코드 보내는 과정
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "gearlogservice@gmail.com",
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const emailOptions = {
      from: "gearlogservice@gmail.com",
      to: email,
      subject: "GearLog - 비밀번호 찾기를 위한 인증코드를 발급합니다.",
      html: `인증코드를 발급해 드립니다. 
    입력창에 인증코드를 입력해 주세요.
    
    [인증코드]: ${token}`,
    };
    //메일보내기
    await transporter.sendMail(emailOptions);

    // auth 테이블에 이메일, 인증코드 담긴 레코드 생성하기
    await authcode.create({ email: email, code: token });

    //처리가 완료되었음을 알리는 응답
    res.status(200).json({
      message: "등록된 이메일주소로 인증코드를 보내드렸습니다.",
    });
  },
  change: async (req, res) => {
    //체인지 콜백함수는 클라이언트에서 인증코드, 이메일을 받음
    //인증코드가 auth테이블에 있는것과 일치한다면 비밀번호를 임시비밀번호로 변경 & 임시비밀번호를 응답으로 전송
    //클라이언트에서 이용자에게 임시비밀번호를 알려줌!
    const { code } = req.body;
    const tempPassword = crypto.randomBytes(20).toString("base64");
    const hashTemp = crypto
      .createHash("sha256")
      .update(tempPassword)
      .digest("base64");

    let data = await authcode.findOne({ where: { code: code } });
    // console.log(data);
    if (!data) {
      return res.status(404).json({ message: "인증코드가 일치하지 않습니다." });
    }

    if (data.dataValues.code === code) {
      user
        .update(
          { password: hashTemp },
          { where: { email: data.dataValues.email } }
        )
        .then(() => {
          authcode.destroy({
            where: {
              email: data.dataValues.email,
            },
          });
        })
        .then(() => {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "gearlogservice@gmail.com",
              pass: process.env.MAIL_PASSWORD,
            },
          });

          const emailOptions = {
            from: "gearlogservice@gmail.com",
            to: data.dataValues.email,
            subject: "GearLog - 임시 비밀번호를 발급합니다.",
            html: `인증코드가 확인되어 임시 비밀번호를 보내드립니다.
            임시 비밀번호로 로그인 하신 후에 새 비밀번호로 바꾸는 것을 권장합니다.
          
          [임시 비밀번호]: $${hashTemp}`,
          };

          transporter
            .sendMail(emailOptions)
            .then(() => {
              res.status(200).json({
                message: "ok",
              });
            })
            .catch((err) => console.log(err));
        });
    }
  },
};
