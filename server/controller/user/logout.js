module.exports = (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ message: "로그아웃 성공" });
};
