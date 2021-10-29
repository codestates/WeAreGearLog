const { user, post, sequelize } = require("../../models");
const { QueryTypes } = require("sequelize");

module.exports = {
  // write: async (req, res) => {
  //   const list = await post.create({
  //     category: "sample2",
  //     writerId: 6,
  //     title: "sample2",
  //     content: "sample2",
  //     img: "sample2",
  //     view: 0,
  //   });

  //   res.send("OK!!!");
  // },
  write: async (req, res) => {
    const { title, content, category, username, imgsrc } = req.body;
    const writer = await user.findOne({
      where: { username: username },
    });
    console.log(writer);
    const writerId = writer.dataValues.id;

    const list = await post.create({
      category: category,
      writerId: writerId,
      title: title,
      content: content,
      img: imgsrc,
    });
    res.send("OK!!!");
  },
  read: async (req, res) => {
    const id = req.params.id;

    const postData = await sequelize.query(
      `SELECT * FROM posts WHERE posts.id = ${id}`,
      // `SELECT posts.*, users.username, users.profile_img FROM posts JOIN users ON posts.writerId = users.id WHERE posts.id = ${id}`,
      { type: QueryTypes.SELECT }
    );

    res.status(200).json({
      data: postData,
    });
  },
  readAll: (req, res) => {
    res.send("OK!!!");
  },
};
