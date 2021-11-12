module.exports = function (io) {
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
};
