const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(`Mongodb is connected successfully on : ${mongoose.connection.host}`.bgGreen.white);
    }catch(error) {
        console.log(`Mongodb connection issue : ${error.message}`.bgRed.white)
    }
};

module.exports = connectDb;
