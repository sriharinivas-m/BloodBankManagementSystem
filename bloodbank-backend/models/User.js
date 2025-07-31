const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bloodGroup: { type: String },
  role: { type: String, enum: ['donor', 'admin'], default: 'donor' },
});

module.exports = mongoose.model('User', userSchema);