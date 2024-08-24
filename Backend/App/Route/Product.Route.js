const route = require('express').Router();
const {AddProduct} =require('../../App/controller/Sheller/Sheller.Controller')

//Login
route.post('/product/add',AddProduct)


module.exports = route;