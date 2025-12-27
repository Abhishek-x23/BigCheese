import React from "react";
import PaymentsPage from "@/components/PaymentsPage";

const CreatorPage = async ({ params }) => {
  const { username } = await params;

  return (
    <>
      <PaymentsPage username={username} />
    </>
  );
};

export default CreatorPage;
