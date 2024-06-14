const jwt = require('jsonwebtoken')

const CheckAuth = (req, res, next) => {

    if (jwt.verify(req.headers.Authorization, 'secret')) {
        next()
    } else {
        res.status(401).send('token expired')
    }
}

module.exports = { CheckAuth }