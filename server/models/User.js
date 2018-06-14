const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// build user schema
const User = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('user', User);