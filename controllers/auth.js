const bcrypt = require('bcryptjs')
const { User } = require('../model')
const signUp = async (req, res) => {
    try {
        const { body } = req
        let addUser = new User(body)
        addUser.save().then((result) => {
            return res.send({ success: true, result })
        }).catch((err) => {
            return res.send({ success: false, message: 'Something Went Wrong!' })
        })
    } catch (e) {
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

module.exports = { signUp }