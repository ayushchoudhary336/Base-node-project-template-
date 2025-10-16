const { logger } = require("winston");
const serverconfig = require("./server-config");

module.exports = {
  serverconfig: require("./server-config"),
  logger: require("./logger-config"),
};
