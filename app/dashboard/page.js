"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  // Optional loading state
  if (status === "loading") {
    return <p className="text-white text-center mt-20">Loading...</p>;
  }
  
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">

     
      

      {/* BACKGROUND */}
      <div className="relative flex justify-center items-center pt-5 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(#1f2a44_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

        {/* FORM CARD */}
        <div className="relative z-10 w-full max-w-xl bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl p-8">

          <h2 className="text-2xl font-bold text-center mb-8">
            Welcome to your Dashboard
          </h2>

          <form className="space-y-5">
            {[
              "Name",
              "Email",
              "Username",
              "Profile Picture",
              "Cover Picture",
              "Razorpay Id",
              "Razorpay Secret",
            ].map((label) => (
              <div key={label}>
                <label className="block text-sm text-gray-300 mb-1">
                  {label}
                </label>
                <input
                  type="text"
                  placeholder={label}
                  className="w-full px-4 py-2 rounded-md bg-[#2a3140] border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full mt-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
