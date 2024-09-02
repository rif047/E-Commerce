const Express = require("express");
const Route = Express.Router();
const { Product_Categories, Create, View, Update, Delete } = require('./Product_Category_Controller')



Route.get('/', Product_Categories)
Route.post('/create', Create)
Route.get('/view/:id', View)
Route.patch('/update/:id', Update)
Route.delete('/delete/:id', Delete)







module.exports = Route