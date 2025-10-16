const express = require("express");
const app = express();
const { serverconfig, logger } = require("./config");

const apiroutes = require("./routes");

app.use("/api", apiroutes);

app.listen(serverconfig.PORT, () => {
  console.log(`app is listening on the port : ${serverconfig.PORT}`);
  logger.info("successfully started the server", {});
  // console.log(process.env);
});
