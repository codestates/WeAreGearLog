require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "OPTIONS", "DELETE"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(router);

const HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, () => {
  console.log(
    HTTP_PORT,
    "번 포트에서 서버가 실행중 입니다. 아직 잘 작동중입니다."
  );
});
