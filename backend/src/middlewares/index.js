const useMiddleWareUnless = require("./utils");
const authorize = require("./authorize");
const authenticate = require("./authenticate");

module.exports = {
  ...useMiddleWareUnless,
  ...authenticate,
  ...authorize,
};
