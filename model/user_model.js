const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('User', UserSchema);

module.exports = {userModel}
