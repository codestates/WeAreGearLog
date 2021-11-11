const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");
const crypto = require("crypto");

module.exports = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("base64");

  let data = await user.findOne({
    where: {
      email: email,
      password: hashPassword,
    },
  });

  if (!data) {
    return res.status(404).send("비밀번호가 잘못되었거나 없는 이메일 입니다.");
  }

  const accessToken = generateAccessToken(data.dataValues);

  sendAccessToken(res, accessToken);
};
