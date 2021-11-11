const { post, sequelize } = require("../../models");
const { QueryTypes } = require("sequelize");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  free: async (req, res) => {
    const searchValue = req.query.search;
    const result = await sequelize.query(
      `SELECT posts.*, users.username, users.profile_img
    FROM posts
    JOIN users ON posts.writerId = users.id
    WHERE posts.category = 'free'
    AND (posts.title LIKE CONCAT('%', '${searchValue}', '%')
    OR posts.content LIKE CONCAT('%', '${searchValue}', '%'))
    ORDER BY posts.id DESC`,
      { type: QueryTypes.SELECT }
    );

    res.status(200).json({
      filtered: result,
    });
    //   res.send("OK!");
  },
  used: async (req, res) => {
    const searchValue = req.query.search;
    const result = await sequelize.query(
      `SELECT posts.*, users.username, users.profile_img
    FROM posts
    JOIN users ON posts.writerId = users.id
    WHERE posts.category = 'used'
    AND (posts.title LIKE CONCAT('%', '${searchValue}', '%')
    OR posts.content LIKE CONCAT('%', '${searchValue}', '%'))
    ORDER BY posts.id DESC`,
      { type: QueryTypes.SELECT }
    );

    res.status(200).json({
      filtered: result,
    });
    //   res.send("OK!");
  },
};
