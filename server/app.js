require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router");
const port = 8080;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: [
//       "http://localhost:3000",
//       "http://localhost:3001",
//       "http://loggear.s3-website.ap-northeast-2.amazonaws.com",
//       "https://gearlog.ga",
//       "https://www.gearlog.ga",
//     ],
//   },
// });

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://loggear.s3-website.ap-northeast-2.amazonaws.com",
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

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  // 방들어오기
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // 수신
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // 방나가기
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(roomId);
  });
});

server.listen(port, () => {
  console.log(port, "번 포트에서 서버가 실행중 입니다.");
});
