"use client";
import React, { useState } from "react";
import Script from "next/script";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { initiate } from "@/actions/useractions";

const PaymentsPage = ({ username }) => {
  const [Paymentform, setPaymentform] = useState({});

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(process.env.RAZORPAY_ID,"RAZORPAY_ID")
    console.log("ENV CHECK:", process.env.RAZORPAY_ID);

    console.log(process.env.NEXT_PUBLIC_RAZORPAY_ID,"NEXT_PUBLIC_RAZORPAY_ID")

    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  // Optional loading state
  if (status === "loading") {
    return <p className="text-white text-center mt-20">Loading...</p>;
  }

  // const pay = async (amount) => {
  //   if (!amount || !username) {
  //     alert("Invalid payment details");
  //     return;
  //   }

  //   // get the id
  //   let a = initiate(amount, username, Paymentform);

  //   if (!a?.id) {
  //     alert("Failed to create order");
  //     return;
  //   }

  //   let orderId = a.id;

  //   var options = {
  //     key: process.env.NEXT_PUBLIC_RAZORPAY_ID, // Enter the Key ID generated from the Dashboard
  //     amount: amount, // Amount is in currency subunits.
  //     currency: "INR",
  //     name: "BigCheese", //your business name
  //     deScription: "Test Transaction",
  //     image: "https://example.com/your_logo",
  //     order_id: orderId, // This is a sample Order ID. Pass the id obtained in the response of Step 1
  //     callback_url: `${process.env.NEXT_PUBLIC_Url}/api/razorpay`,
  //     prefill: {
  //       //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
  //       name: "<name>", //your customer's name
  //       email: "<email>",
  //       contact: "<phone>", //Provide the customer's phone number for better conversion rates
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };

  //   if (!window.Razorpay) {
  //     alert("Razorpay SDK not loaded");
  //     return;
  //   }

  //   var rzp1 = new Razorpay(options);
  //   rzp1.open();
  // };
  

  const pay = async (amount) => {
  if (!amount) return alert("Invalid amount");

  const res = await fetch("/api/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });

  const order = await res.json();

  if (!order?.id) {
    alert("Order creation failed");
    return;
  }

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
    amount,
    currency: "INR",
    name: "BigCheese",
    order_id: order.id,
    callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
  };

  if (!window.Razorpay) {
    alert("Razorpay SDK not loaded");
    return;
  }

  const rzp = new window.Razorpay(options);
  rzp.open();
};



  const handleChange = (e) => {
    setPaymentform({ ...Paymentform, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="min-h-screen bg-gradient-to-b from-[#0b1020] via-[#0e1330] to-black text-white">
        {/* HERO / BANNER */}
        <section className="relative h-[360px] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            alt="banner"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none" />

          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold tracking-wide">
              Support <span className="text-purple-400">My Work</span>
            </h1>
            <p className="text-gray-300 mt-2">
              Help me keep creating awesome content 🚀
            </p>
          </div>
        </section>

        {/* PROFILE */}
        <section className="relative z-20 -mt-20 flex flex-col items-center text-center px-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            className="w-32 h-32 rounded-full border-4 border-[#0b1020] shadow-lg"
            alt="creator"
          />
          <h2 className="mt-4 text-2xl font-bold">@{session.user.name}</h2>
          <p className="text-gray-400">Creating Animated Assets for VTTs</p>

          <div className="flex gap-6 mt-3 text-sm text-gray-400">
            <span>9,719 Members</span>
            <span>82 Posts</span>
            <span>$15,450 / release</span>
          </div>
        </section>

        {/* CONTENT */}
        <section className="relative z-30 max-w-6xl mx-auto mt-14 px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* SUPPORTERS */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition">
            <h3 className="text-lg font-semibold mb-5 text-purple-300">
              Recent Supporters 💜
            </h3>

            <div className="space-y-4 text-sm">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-black/30 p-3 rounded-xl hover:bg-black/50 transition"
                >
                  <img
                    src="https://i.pravatar.cc/150?img=5"
                    className="w-8 h-8 rounded-full"
                    alt="user"
                  />
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Shubham</span>{" "}
                    donated <span className="text-purple-400">$30</span> ❤️
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition">
            <h3 className="text-lg font-semibold mb-5 text-blue-300">
              Make a Payment 🧀
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                value={Paymentform.name || ""}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
              />

              <input
                type="text"
                name="message"
                value={Paymentform.message || ""}
                placeholder="Message"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
              />

              <input
                type="number"
                name="amount"
                placeholder="Amount (₹)"
                onChange={handleChange}
                value={Paymentform.amount || ""}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
              />

              <button
                onClick={() => pay(Number.parseInt(Paymentform.amount) * 100)}
                className="w-full py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition shadow-lg"
              >
                Support Now
              </button>

              <div className="flex gap-3 pt-2">
                {["10", "20", "30"].map((amt) => (
                  <button
                    onClick={() => pay(Number.parseInt(amt) * 100)}
                    key={amt}
                    className="flex-1 py-1 rounded-md bg-black/40 border border-white/10 hover:bg-white/10 transition"
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PaymentsPage;
