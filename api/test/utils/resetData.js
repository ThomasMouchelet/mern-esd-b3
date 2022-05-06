const User = require('../../src/models/user.model.js');

module.exports.cleanUsersData = () => {
    return new Promise((resolve, reject) => {
        User.deleteMany({}, (err) => {
            if (err) {
                reject(err)
            }
            resolve()
        })
    })
}