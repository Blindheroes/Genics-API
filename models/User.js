const {
  Schema,
  model
} = require("mongoose");

// Create schema
// - name: String
// - age: Number

const User = Schema({
  age: { type: Number, required: true },
  name: { type: String, required: true }
});

module.exports = model('Users', User);