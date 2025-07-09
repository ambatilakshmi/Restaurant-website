const mongoose=require('mongoose');
const bookschema=new mongoose.Schema({
    uname:String,
    email:String,
    date:Number,
    request:String,
    //people:Number
},{collection:'bookingdata'}
);
const bookModel=mongoose.model('bookingdata',bookschema);
module.exports=bookModel;
