const mongoose = require('mongoose')

module.exports = () =>{
  mongoose.connect('mongodb+srv://copolat:04010072@cluster0.nxv3l.mongodb.net/movieapp-api', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

mongoose.connection.on('open',()=>{console.log('MongoDB Atlas connection successfull!!')})
mongoose.connection.on('error',(err)=>{console.log('MongoDB Atlas connection failed. Details: ', err)})
}