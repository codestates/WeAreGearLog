const { like, post, sequelize } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");
const { QueryTypes } = require("sequelize");

module.exports = {
  like: async (req, res) => {
    // like 테이블에 postid/userid담아서 추가
    // 해당 게시글 id 찾아서 likecount++
    const readerData = isAuthorized(req);
    if (!readerData) {
      return res.status(401).send("로그인중이 아니거나 잘못된 토큰");
    }
    const readerId = readerData.id;
    const { postId } = req.body;
    const updateLike = await post.increment("like", {
      by: 1,
      where: { id: postId },
    });
    const likeCount = await sequelize.query(
      `SELECT posts.like
      FROM posts 
      WHERE posts.id = ${postId}`,
      { type: QueryTypes.SELECT }
    );
    const likeData = await like.create({
      userId: readerId,
      postId: postId,
    });
    res.status(201).json({
      likeCount: likeCount[0].like,
      message: "liked",
    });
  },
  dislike: async (req, res) => {
    // like 테이블에서 요청에담긴postid/userid찾아서 삭제
    // 해당 게시글 id 찾아서 likecount--
    const readerData = isAuthorized(req);
    if (!readerData) {
      return res.status(401).send("로그인중이 아니거나 잘못된 토큰");
    }
    const likeId = readerData.id;
    const { postId } = req.body;
    const updateLike = await post.increment("like", {
      by: -1,
      where: { id: postId },
    });
    const likeCount = await sequelize.query(
      `SELECT posts.like
      FROM posts 
      WHERE posts.id = ${postId}`,
      { type: QueryTypes.SELECT }
    );
    const likeData = await like.destroy({
      where: { userId: likeId, postId: postId },
    });
    res.status(201).json({
      likeCount: likeCount[0].like,
      message: "disliked",
    });
  },
};
