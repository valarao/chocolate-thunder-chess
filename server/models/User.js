const mongoose = require('mongoose');

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
});

module.exports = mongoose.model('User', userSchema, 'users');
