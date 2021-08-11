const mongoose = require('mongoose');

const { Schema } = mongoose;

const positionSchema = new Schema({
  baseOpening: {
    name: {
      type: String,
      require: true,
    },
    baseId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  pgn: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
  },
  previewImage: {
    data: Buffer,
    contentType: String,
  },
  previewImageLink: {
    type: String,
  },
});

module.exports = mongoose.model('Position', positionSchema, 'positions');
