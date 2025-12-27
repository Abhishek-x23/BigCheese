import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ✅ ALLOWED HERE

export async function POST(req) {
  try {
    const { amount } = await req.json();

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const order = await instance.orders.create({
      amount,
      currency: "INR",
    });

    return NextResponse.json(order);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
