const Product = require( '../models/productModel' );


exports.getAllProducts = async (req, res) =>
{
    try {
      const products = await Product.find({}, 'name price'); 
      
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}