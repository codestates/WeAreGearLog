const { isAuthorized } = require("../tokenFunctions");

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);

  if (accessTokenData === null) {
    return res
      .status(401)
      .json({ message: "토큰이 없거나 유효하지 않습니다." });
  }

  if (accessTokenData !== null) {
    console.log(accessTokenData.profile_img);
    return res.status(200).json({
      data: {
        userinfo: {
          id: accessTokenData.id,
          username: accessTokenData.username,
          email: accessTokenData.email,
          profile_img: accessTokenData.profile_img,
          createdAt: accessTokenData.createdAt,
          updatedAt: accessTokenData.updatedAt,
        },
      },
    });
  }
};
