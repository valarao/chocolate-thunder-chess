const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
  },
  email: {
    type: String,
  },
  id: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema, 'users');
