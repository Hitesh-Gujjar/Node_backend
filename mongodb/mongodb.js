const mongoose = require('mongoose');
const password = encodeURIComponent('hitesh@0507');
const username = encodeURIComponent('hitesh');
const clusterAddress = 'cluster0.4npfbgv.mongodb.net';
const databaseName = 'pocdata';
const nodeurl = `mongodb+srv://Hitesh-Gujjar:Ethics-123@cluster0.4npfbgv.mongodb.net/test`


const connectDb = async () => {
    try {
        await mongoose.connect(nodeurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = connectDb;