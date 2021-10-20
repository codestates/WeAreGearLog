const express = require("express");
const router = express.Router();
const controller = require("./controller");

// user routing
// router.get("/user/userinfo", controller.user.userinfo);
// router.post("/user/signin", controller.user.signin);
// router.post("/user/signup", controller.user.signup);
// router.post("/user/update", controller.user.update);
// router.get("/user/logout", controller.user.logout);
// router.delete("/user/signout", controller.user.signout);

// post routing
// router.get("/post", controller.post.get);
// router.post("/post", controller.post.post);
// router.get("/post:id", controller.post.getById);
// router.put("/post:id", controller.post.put);
// router.delete("/post:id", controller.post.delete);

//message routing
// router.get("/message/chatlist", controller.message.chatlist);
// router.get("/message", controller.message.get);
// router.post("/message", controller.message.post);

module.exports = router;
