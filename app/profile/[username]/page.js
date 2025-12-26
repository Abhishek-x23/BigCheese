"use client"
import React from "react";
import PaymentsPage from "@/components/PaymentsPage";

import { useSession, signIn, signOut } from "next-auth/react";

const CreatorPage = ({params}) => {
  const { data: session } = useSession();
    
  return (
   <>
   <PaymentsPage params/>
   </>
  );
};

export default CreatorPage;
