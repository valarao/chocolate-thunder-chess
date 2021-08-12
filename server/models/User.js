const mongoose = require('mongoose');
const Position = require('./Position');

const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: Position }],
});

module.exports = mongoose.model('User', userSchema, 'users');
