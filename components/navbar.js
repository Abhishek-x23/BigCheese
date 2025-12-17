"use client";
import React from "react";
import { useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import "flowbite";
import Avatar from "./avatar";

import { useSession, signIn, signOut } from "next-auth/react";

const navbar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  
  if (session) {
    return (
      <>
        <div className="container  bg-gray-900 w-full mx-auto px-6 py-2 flex justify-between items-center">
           <div className="text-2xl font-bold flex gap-3 ">
          BigCheese <img className="w-[35px]" src="/cheese.png" alt="." />
        </div>



          <Avatar/>
          {/* <div
            className="text-white flex gap-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
            >
            user
          </div> */}
        </div>
      </>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className=" w-full mx-auto px-6 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold flex gap-3 ">
          BigCheese <img className="w-[35px]" src="/cheese.png" alt="." />
        </div>

        {/* Nav Links */}
        <ul className=" flex space-x-8 text-sm font-medium align-middle items-center justify-center">
          {/* <li>
            <a href="#home" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
          </li> */}
          <li>
            <Link href={"/login"}>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
              >
                login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
