const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    email: { type: String, unique: true },
    password: String,
  }
}) ;

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;