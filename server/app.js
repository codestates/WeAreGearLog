const express = require("express");
const app = express();
const router = require("./router");

app.use(express.json());
app.use(router);

const HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, () => {
  console.log(HTTP_PORT, "번 포트에서 서버가 실행중 입니다.");
});
