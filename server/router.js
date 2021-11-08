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
router.patch("/user/profileimg", userController.update.profileImg);
router.delete("/user", userController.signout);

// gear routing
router.get("/gear/:id", gearController.item);
// router.post("/gear", gearController.list);

// progamer routing

// post routing
router.get("/post", postController.read.readAll);
router.get("/post/mypost", postController.read.readMine);
router.get("/post/:id", postController.read.readId);
router.get("/category", postController.read.readCategory);
router.get("/filteredpost", postController.search);
router.get("/post/view/:id", postController.write.addView);
router.post("/post", postController.write.writePost);
router.post("/post/comment", postController.write.writeComment);
router.post("/post/like", postController.like.like);
router.post("/post/dislike", postController.like.dislike);
router.patch("/post", postController.update);
router.delete("/post/comment/:id", postController.delete.deleteComment);
router.delete("/post/:id", postController.delete.deletePost);

//message routing
// router.get("/message/chatlist", messageController.chatlist);
// router.get("/message", messageController.get);
// router.post("/message", messageController.post);

//check if server is running...
router.get("/", (req, res) => {
  res.send("GearLog 서버 정상적으로 작동중입니다. 배포 자동화 OK!!!");
});

module.exports = router;
