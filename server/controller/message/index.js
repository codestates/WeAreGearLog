const { message } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  get: async (req, res) => {
    const roomId = req.params.id;
    const readerData = isAuthorized(req);
    const readerId = readerData.id;
    console.log(roomId);

    const load = await message.findAll({
      where: {
        userId: readerId,
        roomId: roomId,
      },
    });

    res.status(200).json({
      message: load,
    });
  },
  post: async (req, res) => {
    const { userId, roomId, body, ownedByCurrentUser } = req.body;
    if (!body) {
      return res.status(200).send("nothing to save");
    }

    const saved = await message.create({
      userId: userId,
      roomId: roomId,
      body: body,
      ownedByCurrentUser: ownedByCurrentUser,
    });

    res.status(201).json({
      message: "saved",
    });
  },
};
