require("dotenv").config();

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirect = "http://gearlog-db.s3-website.ap-northeast-2.amazonaws.com";
const axios = require("axios");
const qs = require("qs");
const { user } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const token = req.body.accessToken;
  // console.log(token);

  axios({
    method: "GET",
    url: `https://www.googleapis.com/userinfo/v2/me?access_token=${token}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => {
      console.log(result.data);
      // const username = `${result.data.email.slice(
      //   0,
      //   res.data.data.email.indexOf("@")
      // )}@google`;
      const id = result.data.id;
      const email = result.data.email;
      const username = `${email.slice(0, email.indexOf("@"))}_${id}_google`;
      const profile = result.data.picture;

      user
        .findOrCreate({
          where: { password: email },
          defaults: {
            username: username,
            email: email,
            profile_img: profile,
          },
        })
        .then((data) => {
          const [user, created] = data;
          // console.log(created);
          const token = generateAccessToken(user.dataValues);
          res
            .cookie("accessToken", token, {
              httpOnly: true,
              expiresIn: "300m",
              sameSite: "Strict",
            })
            .status(200)
            .json({ data: result.data, token: token });
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(400);
        });
      // res.status(200).json({ data: result.data });
    })
    .catch((err) => {
      // console.log(err);
      res.sendStatus(401);
    });
};
