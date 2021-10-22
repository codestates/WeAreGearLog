const { user } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const { username, newname, newPassword, newImg } = req.body;

  if (newname) {
    let data = await user.findOne({ where: { username: newname } });
    if (data) {
      return res.status(202).json({ message: "이미 존재하는 username입니다" });
    } else {
      user.update(
        { username: newname },
        {
          where: {
            username: username,
          },
        }
      );
    }
  }
  if (newPassword) {
    user.update(
      { password: newPassword },
      {
        where: {
          username: username,
        },
      }
    );
  }
  if (newImg) {
    user.update(
      { profile_img: newImg },
      {
        where: {
          username: username,
        },
      }
    );
  }

  if (newname) {
    let userData = await user.findOne({ where: { username: newname } });
    let newToken = generateAccessToken(userData.dataValues);
    res.clearCookie("accessToken");
    res
      .cookie("accessToken", newToken, {
        httpOnly: true,
        expiresIn: "300m",
        sameSite: "Strict",
      })
      .status(200)
      .json({
        message: `회원정보가 성공적으로 변경되었습니다.`,
        token: `${newToken}`,
      });
  } else {
    let userData = await user.findOne({ where: { username: username } });
    let newToken = generateAccessToken(userData.dataValues);
    res.clearCookie("accessToken");
    res
      .cookie("accessToken", newToken, {
        httpOnly: true,
        expiresIn: "300m",
        sameSite: "Strict",
      })
      .status(200)
      .json({
        message: `회원정보가 성공적으로 변경되었습니다.`,
        token: `${newToken}`,
      });
  }
};
