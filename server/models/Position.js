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

const positions = mongoose.model('Position', positionSchema, 'positions');
const favourites = mongoose.model('Favourite', positionSchema, 'favourites');

module.exports = {
  dashboardPositions: positions,
  favouritePositions: favourites,
};
