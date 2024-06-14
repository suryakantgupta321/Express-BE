const jwt = require('jsonwebtoken');
const { users } = require('../data');

exports.login = async (req, res) => {

    const { username, password } = req.body

    const user = users.find((data) => data.username == username)
    if (!user) {
        res.status(401).send('User not found')
        return
    }

    if (user.password != password) {
        res.status(401).send('Wrong password')
        return
    }

    const token = jwt.sign(user, 'secret')

    const response = {
        user,
        token
    }

    res.send(response)

}

exports.getUser = async (req, res) => {

}