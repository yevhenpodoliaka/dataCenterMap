export default function dataCenterMarkup(status) {
  if (status === "current") {
    return `

        <img src= "../../img/server.png">

    `;
  } else {
    return `
 
       <img src="../../img/server_ByteCloud.png" alt="current Server">

    `;
  }
}
