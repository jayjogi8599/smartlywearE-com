import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    orderId:{type:String,required:true},
    email:{type:String,required:true},
    products:[{
        productid:{type:String},
        quantity:{type:Number,default:1}
    }],
    address:{type:String,required:true},
    amount:{type:Number,required:true},
    status:{type:String, default:'panding', required:true},
    },{timestamps:true});
    mongoose.models ={}
    export default mongoose.model("Order",OrderSchema);
    
    