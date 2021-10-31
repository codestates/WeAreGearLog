const { gear } = require("../../models");

module.exports = {
  item: (req, res) => {
    const id = req.params.id;

    gear.findOne({ where: { id: id } }).then((data) => {
      //   console.log(data.dataValues);
      res.status(200).json({
        content: data.dataValues,
      });
    });
  },
  list: async (req, res) => {
    const list = await gear.create({
      title: "",
      intro: "",
      src: "",
      title1: "",
      intext: "",
      interviewer: "",
      li1: "",
      li2: "",
      li3: "",
      li4: "",
      final: "",
      ftext: "",
    });

    res.status(200).send("OK");
  },
};
