const User = require('../models/User');

const getUsers = async (req, res) => { };

const saveUser = async (req, res) => {
  try {
    const deleteProduct = await User.saveUser()

    res.status(200).json({
      massage: "delete product suksess",
    })
  }
  catch (error) {

  }
};

module.exports = {
  getUsers,
  saveUser
}