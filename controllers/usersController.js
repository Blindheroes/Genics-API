const User = require('../models/User');

const getUsers = async (req, res) => { };

const saveUser = async (req, res) => {
  try {
    const user = new User(req, res);
    const saveUser = await user.save();
    res.status
  }
};

module.exports = {
  getUsers,
  saveUser
}