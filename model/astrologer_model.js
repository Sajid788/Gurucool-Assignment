
const mongoose = require('mongoose');

const AstrologerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
});

const AstrologerModel = mongoose.model('Astrologer', AstrologerSchema);
module.exports = {AstrologerModel};



