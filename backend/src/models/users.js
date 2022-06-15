const db = require("./dbConnect");

const propsUsers = {
  login: {
    required: ["email", "password"],
  },
  create: {
    required: ["name", "lastname", "password", "email"],
  },
};

const getAllData = (params, table) => db.select(params).from(table);
const getPasswordUserByEmail = (email) =>
  db.select("password").from("users").where({ email });

module.exports = {
  propsUsers,
  getAllData,
  getPasswordUserByEmail,
};
