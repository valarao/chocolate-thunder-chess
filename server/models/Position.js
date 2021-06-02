const mongoose = require('mongoose');

const { Schema } = mongoose;

const positionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  pgn: {
    type: String,
    required: true,
  },
  baseOpening: mongoose.Schema.Types.ObjectId,
  previewImage: { data: Buffer, contentType: String },
});

module.exports = mongoose.model('Position', positionSchema);
