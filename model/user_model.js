const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model('User', UserSchema);

module.exports = { userModel };

