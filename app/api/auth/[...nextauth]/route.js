import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { useSession, signIn, signOut } from "next-auth/react";
import connectDB from "@/components/connectDB";
import mongoose from "mongoose";
import User from "@/models/user";

const authOptions = {
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        connectDB()
        const email = user.email || `${user.id}@github.com` ;
        let currentUser = await User.findOne({ email });

        if (!currentUser) {
          currentUser = await User.create({
            email,
            username:email.split("@")[0],
          });
        }

        return true;
      } catch (error) {
        console.error("SignIn Error:", error);
        
        return true;
      }
    },
    async session({ session , user , token }){
      const dbUser = await User.findOne({email: session.user.email})
      
        console.log(dbUser)
       session.user.name = dbUser.username
        return session
    },
  },
    
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
