const { post, like, comment, sequelize } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  deleteComment: async (req, res) => {
    const readerData = isAuthorized(req);
    const readerId = readerData.id;
    const { postId, commentId } = req.body;
    const commentData = await comment.findOne({ where: { id: commentId } });
    // console.log(readerId, commentData.userId);
    if (readerId !== commentData.userId) {
      return res.status(401).send("작성자가 아니거나 만료된 토큰");
    }
    // 댓글을 삭제하고 해당 댓글이 속하는 포스트의 댓글수 컬럼의 값을 -1 해준다.
    const deleted = await comment.destroy({ where: { id: commentId } });
    const updatePost = await post.increment("comment", {
      by: -1,
      where: { id: postId },
    });
    res.status(200).json({
      deleted: deleted,
    });
  },
  deletePost: async (req, res) => {
    // 1.댓글삭제(해당postId가진 댓글들 전부) 2. 좋아요 삭제(해당postId가진 좋아요들 전부) 3. 게시글삭제
    const readerData = isAuthorized(req);
    const readerId = readerData.id;
    const { postId } = req.body;
    const postData = await post.findOne({ where: { id: postId } });
    // console.log(readerId, postData.writerId);
    if (readerId !== postData.writerId) {
      return res.status(401).send("작성자가 아니거나 만료된 토큰");
    }
    const deleteComment = await comment.destroy({ where: { postId: postId } });
    const deleteLike = await like.destroy({ where: { postId: postId } });
    const deletePost = await post.destroy({ where: { id: postId } });
    res.status(200).json({
      deleted: deleteComment,
    });
  },
};
