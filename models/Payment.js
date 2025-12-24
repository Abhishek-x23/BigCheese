import mongoose from 'mongoose';


const PaymentSchema = new mongoose.Schema ({
    user : {type: String, required: true},
    to_user : {type : String , required : true},
    amount : {type: Number , required : true},
    message : { type :String },
    order_id : {type: String , required : true},
    createdat : {type: Date , default : Date.now},
    updatedat : {type: Date , default : Date.now},
    done : { type : Boolean , default : false }
});

const Payment = mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

export default Payment;

