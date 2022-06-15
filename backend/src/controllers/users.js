const { getAllUsers } = require("../models");
const { httpMessages } = require("../helpers");

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  console.log(users);

  if (!users.length)
    return res.status(200).json({ message: httpMessages["noUsers"] });

  return res.status(200).json({ message: users });
};

module.exports = {
  getUsers,
};
