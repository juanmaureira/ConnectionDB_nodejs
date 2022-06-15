const { getAllData, propsUsers, getPasswordUserByEmail } = require("../models");
const { httpMessages, hasKeys, decodePassword } = require("../helpers");

const getDataUsers = ["name", "lastname", "email"];

const getUsers = async (req, res) => {
  const users = await getAllData(getDataUsers, "users");

  if (!users.length)
    return res.status(200).json({ message: httpMessages["noUsers"] });

  return res.status(200).json({ message: users });
};

const loginUsers = async (req, res) => {
  if (!hasKeys(req.body.user, propsUsers.login.required))
    return res.status(422).json({ message: httpMessages["missingParams"] });

  const { email, password } = req.body.user;
  const pass = await getPasswordUserByEmail(email);
  const passReceived = decodePassword(password);
  console.log(pass, passReceived);
};

module.exports = {
  getUsers,
  loginUsers,
};
