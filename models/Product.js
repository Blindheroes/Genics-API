const {
  Schema,
  model
} = require("mongoose");

// Create schema
// - name: String
// - price: Number
const Product = Schema({
  name: { type: String, required: true },
  message: { message: String }
});

module.exports = model('Products', Product);