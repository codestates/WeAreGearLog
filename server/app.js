require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const server = require("http").createServer(app);
const HTTP_PORT = 8080;
const io = require("socket.io")(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://gearlog.ga",
      "https://www.gearlog.ga",
    ],
    credentials: true,
  },
});

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://gearlog.ga",
      "https://www.gearlog.ga",
    ],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "OPTIONS", "DELETE"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(router);

server.listen(HTTP_PORT, () => {
  console.log(HTTP_PORT, "번 포트에서 서버가 실행중 입니다.");
});

// app.listen(HTTP_PORT, () => {
//   console.log(HTTP_PORT, "번 포트에서 서버가 실행중 입니다.");
// });

require("./socket")(io);
