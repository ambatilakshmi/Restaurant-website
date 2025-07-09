const mongoose=require('mongoose');
const Userschema=new mongoose.Schema({
    email:String,
    lname:String,
    fname:String,
    phonenumber:String,
    password:String,
},{collection:'signupdata'});
const UserModel =mongoose.model("signupdata",Userschema);
module.exports=UserModel;