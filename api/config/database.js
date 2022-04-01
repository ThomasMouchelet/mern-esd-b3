const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
    try {
        await mongoose.connect(
            process.env.DB_HOST,
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    }catch(err){
        console.log(err);
    }}