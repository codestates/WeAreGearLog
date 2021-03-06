const { like, post, comment, sequelize } = require("../../models");
const { QueryTypes } = require("sequelize");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  readId: async (req, res) => {
    const id = req.params.id;
    // const updateView = await post.update(
    //   {
    //     view: sequelize.literal("view + 1"),
    //   },
    //   { where: { id: id } }
    // );
    const readerData = isAuthorized(req);
    const postData = await sequelize.query(
      `SELECT posts.*, users.username, users.profile_img 
      FROM posts 
      JOIN users ON posts.writerId = users.id 
      WHERE posts.id = ${id}`,
      { type: QueryTypes.SELECT }
    );
    // 이용자가 로그인중일 경우 (내가쓴글인지? 좋아요한적이 있는지?)
    let doILike = false;
    let isMine = false;
    if (readerData) {
      const readerId = readerData.id;
      const isLike = await sequelize.query(
        `SELECT likes.userId
        FROM likes
        WHERE likes.userId = ${readerId} 
        AND likes.postId = ${id}`,
        { type: QueryTypes.SELECT }
      );
      if (isLike.length !== 0) {
        doILike = true;
      }
      const readerName = readerData.username;
      if (readerName === postData[0].username) {
        isMine = true;
      }
    }
    /////////////////////////////////////////////////
    const commentData = await sequelize.query(
      `SELECT comments.*, users.username, users.profile_img
      FROM comments 
      JOIN users ON comments.userId = users.id
      WHERE comments.postId = ${id}
      ORDER BY comments.id DESC`,
      { type: QueryTypes.SELECT }
    );
    res.status(200).json({
      like: doILike,
      isMine: isMine,
      post: postData,
      comment: commentData,
    });
  },
  // 모든 게시글 조회(필요하다면 특정 카테고리별로 나눠서 요청받기)
  readAll: async (req, res) => {
    const postData = await sequelize.query(
      `SELECT posts.*, users.username, users.profile_img 
      FROM posts 
      JOIN users ON posts.writerId = users.id
      ORDER BY posts.id DESC`,
      // `SELECT posts.*, users.username, users.profile_img FROM posts JOIN users ON posts.writerId = users.id WHERE posts.id BETWEEN 1 AND 10`, // 페이지네이션 구현시 사용할 코드스니펫
      // 만약에 중간에 삭제된 레코드가 존재한다면 페이지네이션을 구현하려고 한 페이지에 10개씩 map으로 뿌려주려고 할때 응답은 어떻게 해줘야 할 것인가?(id 값만을 기준으로 한다면 삭제된 레코드의 갯수만큼 부족하게 응답이 갈 것이기 때문에...)
      // 내가 생각한 해결 방법: 서버에서는 일단 다 보내고 클라이언트 단에서 원하는 갯수(ex10개씩)만큼 취해서 페이지응답에 사용? 배열로응답이 갈거니까 원하는길이만큼 잘라써라?!
      { type: QueryTypes.SELECT }
    );
    res.status(200).json({
      data: postData,
    });
  },
  // 요청을 보낸 사용자가 작성한 모든 게시글 조회
  readMine: async (req, res) => {
    const readerData = isAuthorized(req);
    if (!readerData) {
      return res.status(404).send("로그인중이 아니거나 잘못된 토큰입니다.");
    }
    const readerId = readerData.id;
    const postData = await sequelize.query(
      `SELECT posts.*, users.username, users.profile_img 
      FROM posts 
      JOIN users ON posts.writerId = users.id 
      WHERE users.id = ${readerId}
      ORDER BY posts.id DESC`,
      { type: QueryTypes.SELECT }
    );
    res.status(200).json({
      data: postData,
    });
  },
  readCategory: async (req, res) => {
    const category = req.query.board;
    const filtered = await sequelize.query(
      `SELECT posts.*, users.username, users.profile_img
      FROM posts
      JOIN users ON posts.writerId = users.id
      WHERE posts.category = '${category}'
      ORDER BY posts.id DESC`,
      { type: QueryTypes.SELECT }
    );

    res.status(200).json({
      categoryPost: filtered,
    });
  },
};
