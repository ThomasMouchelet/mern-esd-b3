const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateAccessToken (user) {
    return jwt.sign({
        email: user.email,
        userId: user._id,
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}

module.exports = {
    generateAccessToken
}