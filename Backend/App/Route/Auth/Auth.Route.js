const route = require('express').Router();
const {Login , SignUp} =require('../../controller/Auth/Auth.controller')

//Login
route.post('/login',Login)
route.post('/signup',SignUp)


module.exports = route;