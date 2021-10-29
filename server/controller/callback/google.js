require("dotenv").config();

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirect = "http://gearlog-db.s3-website.ap-northeast-2.amazonaws.com";
const axios = require("axios");
const qs = require("qs");
const { user } = require("../../models");

module.exports = (req, res) => {
  const token = req.body.accessToken;
  console.log(token);

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
      const email = result.data.email;
      const username = `${email.slice(0, email.indexOf("@"))}@google`;
      const profile = result.data.picture;

      user
        .findOrCreate({
          where: { username: username },
          defaults: {
            email: email,
            profile_img: profile,
          },
        })
        .then((data) => {
          const [user, created] = data;
          // console.log(created);
          res.status(200).json({ data: result.data });
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
