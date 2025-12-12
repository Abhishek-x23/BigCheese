"use client";
import React from 'react';

export default function Home() {
  return (
    <>
      <div>

        <div className="home relative z-10  ">
          <div className=" h-[50vh] relative z-10 flex flex-col gap-2 items-center justify-center  text-center pt-[10vh]">
            <h1 className="text-5xl font-bold text-white mb-4 flex gap-5">BigCheese <img  className="w-[55px]" src="/cheese.png" alt="." /> </h1>
            <p className="text-gray-400 text-lg">
              Because every big idea deserves its slice of cheese — powered by
              your fans 
            </p>
            <div className="buttons gap-2 flex mt-2">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Start Here
              </button>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Read More
                </span>
              </button>
            </div>
          </div>
          <div className=" h-0.5 w-full bg-gray-600 opacity-40"></div>

          <div className="container2 pt-10 flex flex-col gap-2 items-center justify-center  text-center">
            <span className="my-5 font-semibold text-gray-200">
              Your fans can fund your project
            </span>

            <div className="mt-10">
              <div className="options flex gap-[10vw] items-center justify-center  text-center ">
                <div>
                  <div className="rounded-full flex-col flex gap-4 items-center justify-center  text-center">
                    <div className="bg-gray-400 w-18 h-18 rounded-full flex gap-2 items-center justify-center  text-center ">
                      <img className="w-16" src="/man.gif" alt="man" />
                    </div>
                    <span className="text-sm">fans want to help</span>
                    <p className="text-[10px] text-gray-300">
                      your fans are available for you to help you
                    </p>
                  </div>
                </div>
                <div>
                  <div className="rounded-full flex-col flex gap-4 items-center justify-center  text-center">
                    <div className="bg-gray-400 w-18 h-18 rounded-full flex gap-2 items-center justify-center  text-center ">
                      <img className="w-16" src="/coin.gif" alt="man" />
                    </div>
                    <span className="text-sm">fans want to help</span>
                    <p className="text-[10px] text-gray-300">
                      your fans are available for you to help you
                    </p>
                  </div>
                </div>
                <div>
                  <div className="rounded-full flex-col flex gap-4 items-center justify-center  text-center">
                    <div className="bg-gray-400 w-18 h-18 rounded-full flex gap-2 items-center justify-center  text-center ">
                      <img className="w-16" src="/group.gif" alt="man" />
                    </div>
                    <span className="text-sm">fans want to help</span>
                    <p className="text-[10px] text-gray-300">
                      your fans are available for you to help you
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pitch flex gap-[10vw] items-center justify-center  text-center  mt-20 mb-10">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TrmXPrEjY08?si=tcW3dscoEfwvExIG"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
