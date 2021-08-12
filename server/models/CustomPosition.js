const mongoose = require('mongoose');

const { Schema } = mongoose;

const positionSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  pgn: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  previewImageLink: {
    type: String,
  },
});

module.exports = mongoose.model('CustomPosition', positionSchema);
