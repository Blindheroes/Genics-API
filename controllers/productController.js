const Product = require('../models/Product');


// Get all products
const getProducts = async (req, res) => { };

// Save a product
const saveProduct = async (req, res) => { };

// Update a product
const updateProduct = async (req, res) => { };

// Delete a product
const deleteProduct = async (req, res) => {
  const productid = res.param.productid
  try {
    const deleteProduct = await Product.findOneAndDelete(productid)

    res.status(200).json({
      massage: "delete product suksess",
    })
  }
  catch (error) {

  }
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}