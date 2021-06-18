const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name:String,
  lastName:String,
  age:Number,
  email:String
})

module.exports = mongoose.model('user', UserSchema)