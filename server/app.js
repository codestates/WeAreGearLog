const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("GearLog 서버 정상적으로 작동중입니다.");
});

const HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, () => {
  console.log(HTTP_PORT, "번 포트에서 서버가 실행중 입니다.");
});
