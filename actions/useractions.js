// "use server"

// export const runtime = "nodejs";


// import React from "react"
// import Razorpay from "razorpay"
// import Payment from "@/models/Payment"
// import User from "@/models/user"
// import connectDB from "@/components/connectDB"

// export const initiate = async (amount , to_username , paymentform) =>{

//     connectDB()
//     var instance = new Razorpay({ key_id: process.env.RAZORPAY_ID, key_secret: process.env.RAZORPAY_SECRET })

//     let options = {
//         amount : Number.parseInt(amount),
//         currency : "INR",
//     }

//     let x =  await instance.orders.create(options)

//     // creating a payment object which shows a pending payment in the database

//     await Payment.create({oid : x.id, amount : amount, to_user: to_username, name:paymentform.name, message : paymentform.message})

//     return x


// }