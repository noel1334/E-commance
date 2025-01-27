import Product from "../models/productModel.js";
// DESC add a new product
// route /
// access private

export const addProduct = async (req, res) => {
  // res.send("Hello");
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};

// DESC add a new product
// route /
// access private

export const allProduct = async (req, res) => {
  try {
    const products = await Product.find().limit();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

// DESC add a new product
// route /
// access private

export const getProduct = async (req, res) => {
  const id = req.params.id;
  // res.send(id);
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
// DESC add a new product
// route /
// access private

export const filterProduct = async (req, res) => {
  const query = req.query.query;
  // res.send(query);
  try {
    const product = await Product.find({ category: { $in: [query] } });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
