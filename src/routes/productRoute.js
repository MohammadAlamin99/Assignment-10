const router = require( 'express' ).Router();
const authenticate = require('../middleware/authMiddleware')
const generateTokenfile = require('../controller/generateToken');



const { getAllProducts } = require( '../controller/productController' );


router.get( '/products' , authenticate,  getAllProducts );
router.get( '/createToken' , generateTokenfile.generateToken)


module.exports = router;        