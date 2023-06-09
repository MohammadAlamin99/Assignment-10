const express = require( "express" );
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./src/routes/productRoute');
const port = process.env.PORT || 6010


dotenv.config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true }))




mongoose.connect('mongodb://127.0.0.1:27017/Schools', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Perform any additional operations after successful connection
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



app.use( '/api/v1', router);

app.listen( port , () =>
{
    console.log( `Server is running on port ${port}` );
})