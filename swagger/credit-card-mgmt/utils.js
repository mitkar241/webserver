const log4js = require("log4js");

/*
https://log4js-node.github.io/log4js-node/appenders.html
##########
# loglevel priority in increasing order
##########
- trace
- debug
- info
- warn
- error
- fatal

N.B. need log-rotate
*/

function initLogger(logLvl) {
  log4js.configure({
    appenders: {
      "[api]": {
        type: "file",
        filename: "ccd.log"
      },
      "[func]": {
        type: "file",
        filename: "ccd.log"
      },
      "[utils]": {
        type: "file",
        filename: "ccd.log"
      }
    },
    categories: {
      default: {
        appenders: ["[api]", "[func]", "[utils]"],
        level: logLvl
      }
    }
  });
}

function getLogger(appender) {
  const logger = log4js.getLogger("["+appender+"]")
  return logger
}

module.exports ={
  initLogger, getLogger
}
