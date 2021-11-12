const server = require("./app");

const io = require("socket.io")(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://gearlog.ga",
      "https://www.gearlog.ga",
    ],
    methods: ["GET", "POST"],
  },
});

// socket.io
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
