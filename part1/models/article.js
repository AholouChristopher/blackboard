mongoose = require('./bddconnect');

var articleSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
  weight: Number,
  img: String,
});

module.exports = mongoose.model('article', articleSchema);
