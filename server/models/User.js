const mongoose = require('mongoose');

const { Schema } = mongoose;

// TODO: This is a placeholder. Update after database schema design is complete.
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema, 'users');
