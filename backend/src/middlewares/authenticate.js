const { httpMessages } = require("../helpers");

const authenticate = async (req, res, next) => {
  console.log("me mandaron al authenticate");
  const token = req.headers["x-access-token"];
  if (token) {
  } else {
    return res.status(422).json({ message: httpMessages["noToken"] });
  }
};

module.exports = {
  authenticate,
};
