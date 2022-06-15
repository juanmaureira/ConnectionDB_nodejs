const { bcrypt } = require("bcrypt");

const hasKeys = (obj, keys) => obj && keys.every((k) => obj.hasOwnProperty(k));

const decodePassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

module.exports = {
  hasKeys,
  decodePassword
};
