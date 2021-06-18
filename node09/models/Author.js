const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  name:{type: String, required:true, unique:true, maxLength:15},
  category: {type:String, required:true, maxLength:[15,'Oppss... You cannot enter more than {MAXLENGTH} characters in `{PATH}`! (Entered value: {VALUE})'], minLength:[3,'Oppss... You cannot enter less than {MINLENGTH} characters in `{PATH}`! (Entered value: {VALUE})']},
  score: {type:Number, default:0, max:100, min:0},
  views: {type: Number, default:1},
  isDelete:{type: Boolean, default:false}
})

module.exports = mongoose.model('author', AuthorSchema)
