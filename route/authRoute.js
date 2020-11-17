const express = require('express')
const routers =  express.Router()
const middleware =  require('./Middleware/AuthMiddleware')
const AuthController =  require('../controller/AuthController')
routers.get('/:user',AuthController.getUserByID)
routers.post('/login',AuthController.login)
routers.post('/register',AuthController.register)
routers.patch('/change-account',AuthController.updateUser)
routers.get('/refresh',AuthController.refreshToken)
//routers.use(middleware.middlwareIsAuth)
routers.put('/refresh',middleware.middlwareIsAuth,AuthController.refreshToken)
module.exports = routers