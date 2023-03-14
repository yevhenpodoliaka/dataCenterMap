export default function dataCenterMarkup(status) {
  return status === "current"
    ? `<img src= "./img/server.png"alt="current Server">`
    : ` <img src="./img/server_ByteCloud.png" alt="new Server">`;
}

