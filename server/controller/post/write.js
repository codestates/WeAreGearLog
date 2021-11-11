const { like, post, comment, sequelize } = require("../../models");
const { QueryTypes } = require("sequelize");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  // 게시글 조회수 올라가기 기능
  addView: async (req, res) => {
    const id = req.params.id;
    const updateView = await post.update(
      {
        view: sequelize.literal("view + 1"),
      },
      { where: { id: id } }
    );
    res.status(200).json({ message: "viewCount updated" });
  },
  // 게시물 작성하기
  writePost: async (req, res) => {
    // 요청에 담긴 토큰을 통해 작성자의 정보를 얻음
    const writerData = isAuthorized(req);
    if (!writerData) {
      return res.status(401).send("로그인중이 아니거나 잘못된 토큰입니다.");
    }
    const writerId = writerData.id;
    const { category, title, content, img } = req.body;
    // const content = req.body.content.value;
    // console.log(content);
    if (!title || !content) {
      return res.status(202).send("제목이나 본문은 빈칸으로 둘 수 없습니다.");
    }
    const posted = await post.create({
      category: category,
      writerId: writerId,
      title: title,
      content: content,
      img: img,
    });
    res.status(201).json({ data: posted });
    // 응답을 방금 작성한 댓글이 아닌 해당postId의 댓글 전체로?
  },
  // 댓글 쓰기
  writeComment: async (req, res) => {
    const writerData = isAuthorized(req);
    if (!writerData) {
      return res.status(404).send("로그인중이 아니거나 잘못된 토큰입니다.");
    }
    const writerId = writerData.id;
    const { content, postId } = req.body;
    if (!content) {
      return res.status(400).send("댓글 내용을 입력하세요");
    }
    const updateComment = await post.increment("comment", {
      by: 1,
      where: { id: postId },
    });
    const commentData = await comment.create({
      userId: writerId,
      postId: postId,
      content: content,
    });
    const postList = await sequelize.query(
      `SELECT comments.*, users.username, users.profile_img
      FROM comments
      JOIN users ON comments.userId = users.id
      WHERE comments.postId = ${postId}
      ORDER BY comments.id DESC`,
      { type: QueryTypes.SELECT }
    );
    // raw query를 쓰지 않고 order by를 시퀄라이즈에 적용하는 방법
    // const postList = await comment.findAll({
    //   where: { postId: postId },
    //   order: [["id", "desc"]],
    // });
    res.status(201).json({ postList: postList });
  },
};
