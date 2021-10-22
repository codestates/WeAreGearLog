const { user } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");
const crypto = require("crypto");

module.exports = {
  username: (req, res) => {
    const { username, newname } = req.body;

    user
      .findOne({
        where: {
          username: newname,
        },
      })
      .then((data) => {
        if (data) {
          return res
            .status(202)
            .json({ message: "이미 존재하는 username입니다" });
        } else {
          user
            .update(
              { username: newname },
              {
                where: {
                  username: username,
                },
              }
            )
            .then(() => {
              user
                .findOne({
                  where: {
                    username: newname,
                  },
                })
                .then((data) => {
                  const newToken = generateAccessToken(data.dataValues);
                  res.clearCookie("accessToken");
                  res
                    .cookie("accessToken", newToken, {
                      httpOnly: true,
                      expiresIn: "300m",
                      sameSite: "Strict",
                    })
                    .status(200)
                    .json({
                      message: `username이 ${newname}(으)로 변경되었습니다.`,
                      token: `${newToken}`,
                    });
                })
                .catch((err) => console.log(err));
            });
        }
      });
  },
  password: (req, res) => {
    const { username, newPassword } = req.body;
    const hashPassword = crypto
      .createHash("sha512")
      .update(newPassword)
      .digest("hex");

    user
      .update(
        { password: hashPassword },
        {
          where: {
            username: username,
          },
        }
      )
      .then(() => {
        user
          .findOne({
            where: {
              username: username,
            },
          })
          .then((data) => {
            const newToken = generateAccessToken(data.dataValues);
            res.clearCookie("accessToken");
            res
              .cookie("accessToken", newToken, {
                httpOnly: true,
                expiresIn: "300m",
                sameSite: "Strict",
              })
              .status(200)
              .json({
                message: `password가 변경되었습니다.`,
                token: `${newToken}`,
              });
          })
          .catch((err) => console.log(err));
      });
  },
  profileImg: (req, res) => {
    res.send("RESPONDING... OK!");
  },
};
