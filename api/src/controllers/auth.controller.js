const User = require('../models/user.model');

const AuthController = {
    signup: async (req, res) => {
        console.log(req.body);
        res.send('signup');
    }
}

module.exports = AuthController;