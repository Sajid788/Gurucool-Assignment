const mongoose = require('mongoose');
require('dotenv').config()

const connection = mongoose.connect(process.env.MONGO_URL);

const PORT = process.env.PORT

module.exports = {connection,PORT};