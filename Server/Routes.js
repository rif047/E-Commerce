const Express = require("express");
const Route = Express.Router();
const Product_Category = require('./API/Product/Product_Category/Product_Category_Route.js');
const Product = require('./API/Product/Product_Route.js');
const Customer = require('./API/Customer/Customer_Route.js');
const User = require('./API/User/User_Route.js');




Route.get('/', (req, res) => { res.send('Server API is here') })

Route.use('/product_categories', Product_Category);
Route.use('/products', Product);

Route.use('/customers', Customer);

Route.use('/users', User);


module.exports = Route