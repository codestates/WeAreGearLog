const { user } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");
const crypto = require("crypto");
const { isAuthorized } = require("../tokenFunctions");

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
    const { username, password, newPassword } = req.body;
    const hashPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("base64");
    const hashNewPassword = crypto
      .createHash("sha256")
      .update(newPassword)
      .digest("base64");

    user.findOne({ where: { username: username } }).then((data) => {
      if (data.dataValues.password !== hashPassword) {
        res
          .status(202)
          .json({ message: "변경 전 패스워드가 일치하지 않습니다." });
      } else {
        user
          .update(
            { password: hashNewPassword },
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
      }
    });
  },
  profileImg: async (req, res) => {
    const userData = isAuthorized(req);
    if (!userData) {
      res.status(404).send("UNAUTHORIZED");
    }
    const uploadedImg = req.body.profileImg;
    console.log(uploadedImg);
    if (!uploadedImg) {
      res.status(400).send("요청에 이미지가 없습니다.");
    }
    const updateUser = await user.update(
      { profile_img: uploadedImg },
      { where: { username: userData.username } }
    );

    res.status(200).json({
      message: "프로필 이미지 변경 성공",
    });
  },
};
