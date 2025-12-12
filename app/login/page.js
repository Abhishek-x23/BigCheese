"use client";

import React from "react";
import GithubIcon from "@/components/githubIcon"
import { Session ,signIn, signOut } from "next-auth/react";

const Page = () => {
  return (
    <div className="mt-20 z-10 flex flex-col justify-center items-center text-center">
      <div className="h-screen w-screen bg-gray-400">
        <div className="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
          <div className="relative container m-auto px-6">
            <div className="m-auto md:w-7/12">
              <div className="rounded-xl bg-white dark:bg-gray-800 shadow-xl">
                <div className="p-8">
                  {/* ─────────────── Title ─────────────── */}
                  <div className="space-y-4 text-center">
                    <h2 className="mb-8 text-2xl text-cyan-900 dark:text-white font-bold">
                      Log in to unlock the <br /> best of BigCheese.
                    </h2>
                    <div className="flex items-center justify-center">
                      <img
                        className="mx-auto w-[46px]"
                        src="/cheese.png"
                        alt="BigCheese logo"
                      />
                    </div>
                  </div>

                  {/* ─────────────── Login Buttons ─────────────── */}
                  <div className="mt-10 grid space-y-4">
                    {/* Google Login */}
                    <button
                      onClick={() => signIn("google")}
                      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 hover:bg-slate-200 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <img
                          src="https://www.svgrepo.com/show/475656/google-color.svg"
                          className="absolute left-0 w-5"
                          alt="Google logo"
                        />
                        <span className="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-black sm:text-base">
                          Continue with Google
                        </span>
                      </div>
                    </button>

                    {/* GitHub Login */}
                    <button
                      onClick={() => signIn("github")}
                      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 hover:bg-slate-200 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <GithubIcon/>
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition dark:text-white duration-300 group-hover:text-black sm:text-base">
                          Continue with GitHub
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* ─────────────── Footer Text ─────────────── */}
                  <div className="mt-14 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center">
                    <p className="text-xs">
                      By proceeding, you agree to our{" "}
                      <a href="/privacy-policy/" className="underline">
                        Terms of Use
                      </a>{" "}
                      and confirm you have read our{" "}
                      <a href="/privacy-policy/" className="underline">
                        Privacy and Cookie Statement
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
