require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const server = require("http").createServer(app);
const port = process.env.SERVER_PORT || 8080;
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "OPTIONS", "DELETE"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(router);

server.listen(port, () => {
  console.log(port, "번 포트에서 서버가 실행중 입니다.");
});

require("./socket")(io);
