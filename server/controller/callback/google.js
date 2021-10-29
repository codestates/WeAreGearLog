require("dotenv").config();

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirect = "http://gearlog-db.s3-website.ap-northeast-2.amazonaws.com";
const axios = require("axios");
const qs = require("qs");

module.exports = (req, res) => {
  // axios({
  //   method: "POST",
  //   url: "https://accounts.google.com/o/oauth2/token",
  //   headers: {
  //     "content-type": "application/x-www-form-urlencoded",
  //   },
  //   data: qs.stringify({
  //     grant_type: "authorization_code",
  //     client_id: clientId,
  //     client_secret: clientSecret,
  //     redirect_uri: redirect,
  //     code: req.body.authorizationCode,
  //   }),
  // })
  //   .then((response) => {
  //     console.log(response);
  //     const token = response.data.access_token;
  //     axios({
  //       method: "GET",
  //       url: `https://www.googleapis.com/userinfo/v2/me?access_token=${token}`,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((result) => {
  //         res.status(200).json({ data: result.data });
  //       })
  //       .catch((err) => {
  //         // console.log(err);
  //         res.sendStatus(401);
  //       });
  //   })
  //   .catch((err) => {
  //     // console.log(err);
  //     res.sendStatus(400);
  //   });
  const token = req.body.token;
  axios({
    method: "GET",
    url: `https://www.googleapis.com/userinfo/v2/me?access_token=${token}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => {
      // console.log(result.data);
      res.status(200).json({ data: result.data });
    })
    .catch((err) => {
      // console.log(err);
      res.sendStatus(401);
    });
};
