const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  link: String,
  countdown: Date,
  heading: String,
  description: String,
  isVisible: Boolean,
});

module.exports = mongoose.model('Banner', bannerSchema);
  