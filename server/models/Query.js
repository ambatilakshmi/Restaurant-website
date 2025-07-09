const mongoose=require('mongoose');
const queryschema=new mongoose.Schema({
    email:String,
    query:String,
},{collection:'query'});
const queryModel =mongoose.model("query",queryschema);
module.exports=queryModel;