require("dotenv").config();

const clientId = process.env.KAKAO_CLIENT_ID;
const clientSecret = process.env.KAKAO_CLIENT_SECRET;
const axios = require("axios");
const qs = require("qs");
const { user } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  axios({
    method: "POST",
    url: "https://kauth.kakao.com/oauth/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirectUri: "http://gearlog-db.s3-website.ap-northeast-2.amazonaws.com/",
      code: req.body.authorizationCode,
    }),
  })
    .then((response) => {
      const token = response.data.access_token;
      // console.log(token);
      axios({
        method: "GET",
        url: "https://kapi.kakao.com/v2/user/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((result) => {
          // console.log("HERE", result);
          const id = result.data.id;
          const username = `${result.data.properties.nickname}_${id}_kakao`;
          // const email = `${result.data.properties.nickname}@kakaoSocial`;
          const email = result.data.kakao_account.email;
          if (!email) {
            email = `${result.data.properties.nickname}@kakaoSocial`;
          }
          const profile = result.data.properties.profile_image;

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
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      res.status(404);
    });
};
