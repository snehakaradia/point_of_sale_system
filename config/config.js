const mongoose = require('mongoose');

//coonectdb
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected ${conn.connection.host}`);
    } catch (error) {
        console.log(`Mongo Connect Error`);
        process.exit(1)
    }
}

//export
module.exports = connectDb;