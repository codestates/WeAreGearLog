const express = require("express");
const router = express.Router();
const { userController } = require("./controller");
const { postController } = require("./controller");
const { messageController } = require("./controller");

// user routing
router.get("/user/auth", userController.auth);
router.post("/user/login", userController.login);
router.post("/user/signup", userController.signup);
router.put("/user/update", userController.update);
router.get("/user/logout", userController.logout);
router.delete("/user/signout", userController.signout);

// post routing
// router.get("/post", postController.get);
// router.post("/post", postController.post);
// router.get("/post:id", postController.getById);
// router.put("/post:id", postController.put);
// router.delete("/post:id", postController.delete);

//message routing
// router.get("/message/chatlist", messageController.chatlist);
// router.get("/message", messageController.get);
// router.post("/message", messageController.post);

router.get("/", (req, res) => {
  res.send(
    "GearLog 서버 정상적으로 작동중입니다. 배포 자동화 후에도 잘 작동합니다."
  );
});

module.exports = router;
