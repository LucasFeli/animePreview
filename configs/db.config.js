const mongoose = require('mongoose');
require("dotenv").config();



  const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
  async function connectDb(){
    try{
      await mongoose.connect(
        process.env.MONGODB_URI,
        dbOptions
      )
      console.log(`Connected to Mongo!${process.env.PORT}`)
    } catch(e){
      console.log(`Error to connect to the database ${e}`)
    } 
  };
  
  module.exports = connectDb;