const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { generateAccessToken } = require('../utils/token');

const AuthController = {
    signup: async (req, res) => {
        const { password, email } = req.body;

        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                res.status(500).send(err);
            }

            const newUser = {
                email,
                password: hash
            }

            try {
                const user = await User.create(newUser)
                user.save();
                
                const accessToken = generateAccessToken(user);
                
                return res.send({ accessToken });

            } catch (error) {
                res.status(500).send(error);
            }
        })
    },
    signin: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(404).send('User not found');
            }
            
            const result = await bcrypt.compare(password, user.password)

            if (!result) {
                return res.status(401).send('Unauthorized');
            }
            if (result) {
                const accessToken = generateAccessToken(user);
                
                return res.send({ accessToken });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = AuthController;