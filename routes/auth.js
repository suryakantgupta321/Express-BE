const { Router } = require('express');
const { login, getUser } = require('../controller/auth');
const { CheckAuth } = require('../middleware/checkAuth');

const authRoute = Router()

authRoute.post('/auth/login', login)
authRoute.get('/auth/get-user', CheckAuth, getUser)

module.exports = { authRoute };
