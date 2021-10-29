const express = require("express");
const router = express.Router();
const { userController } = require("./controller");
const { postController } = require("./controller");
const { messageController } = require("./controller");
const { callbackController } = require("./controller");
const { gearController } = require("./controller");

// user routing
router.get("/user", userController.userinfo);
router.get("/user/logout", userController.logout);
router.post("/user/login", userController.login);
router.post("/user/signup", userController.signup);
router.post("/user/code", userController.findpass.send);
router.post("/callback/kakao", callbackController.kakao);
router.post("/callback/google", callbackController.google);
router.patch("/user/temp", userController.findpass.change);
router.patch("/user/username", userController.update.username);
router.patch("/user/password", userController.update.password);
router.patch("/user/profileImg", userController.update.profileImg);
router.delete("/user", userController.signout);

// gear routing
router.get("/gear/:id", gearController.gear.item);

// post routing
// router.get("/post", postController.get);
router.post("/post", postController.post.write);
// router.get("/post/:id", postController.getById);
// router.put("/post/:id", postController.put);
// router.delete("/post/:id", postController.delete);

//message routing
// router.get("/message/chatlist", messageController.chatlist);
// router.get("/message", messageController.get);
// router.post("/message", messageController.post);

//check if server is running...
router.get("/", (req, res) => {
  res.send("GearLog 서버 정상적으로 작동중입니다. 배포 자동화 OK!!!");
});

module.exports = router;
