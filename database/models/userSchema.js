const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  events: [],
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;