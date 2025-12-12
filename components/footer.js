import React from "react";

const footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-300 py-4  ">
      
        
        
        <div className="text-sm text-center md:text-left items-center justify-center  flex ">
          © {new Date().getFullYear()} <span className="font-semibold text-white"></span>. All rights reserved by developer
        </div>

        
      
    </div>
  );
};

export default footer;
