const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    }
});

const userModel = mongoose.model('User', UserSchema);

exports.module = {userModel}
