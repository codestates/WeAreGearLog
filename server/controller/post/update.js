const { post, sequelize } = require("../../models");
const { QueryTypes } = require("sequelize");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const { postId, title, content, img } = req.body;
  const readerData = isAuthorized(req);
  const readerId = readerData.id;
  const postData = await post.findOne({ where: { id: postId } });
  if (readerId !== postData.writerId) {
    return res.status(401).send("작성자가 아니거나 만료된 토큰");
  }
  if (!title || !content) {
    return res.status(400).send("제목이나 본문은 빈칸으로 둘 수 없습니다.");
  }
  const updatePost = await post.update(
    {
      title: title,
      content: content,
      img: img,
    },
    { where: { id: postId } }
  );
  res.status(201).json({
    updated: {
      title: title,
      content: content,
      img: img,
    },
  });
};
