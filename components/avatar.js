"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User, Settings, HelpCircle, LogOut, DollarSign, Notebook } from "lucide-react";

const Avatar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Avatar */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
      >
        <img
          src={session?.user?.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330"}
          className="h-10 w-10 rounded-full"
          alt="avatar"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-lg border">
          
          {/* Profile section */}
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-semibold text-gray-900">
              {session?.user?.name || "User"}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {session?.user?.email}
            </p>
          </div>

          {/* Menu */}
          <div className="p-1 text-gray-500">
            <Link href={`/profile/${session.user.name}`}><MenuItem icon={<User size={16} />} label="My Page" /></Link>
            <Link href={"/dashboard"}><MenuItem icon={<Notebook size={16} />} label="Dashboard" /></Link>
            <MenuItem icon={<Settings size={16} />} label="Settings" />
            <MenuItem icon={<DollarSign size={16} />} label="Earnings" />
            <MenuItem icon={<HelpCircle size={16} />} label="Support" />

            <MenuItem
              icon={<LogOut size={16} />}
              label="Log out"
              danger
              onClick={() => signOut()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, label, onClick, danger }) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center gap-2 px-3 py-2 rounded-md text-sm transition
      ${danger ? "text-red-600 hover:bg-red-50" : "hover:bg-gray-100"}
    `}
  >
    {icon}
    {label}
  </button>
);

export default Avatar;





