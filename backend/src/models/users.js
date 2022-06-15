const db = require("./dbConnect");

const getAllUsers = () => db.select("id", "name", "lastname").from("users");

module.exports = {
  getAllUsers,
};
