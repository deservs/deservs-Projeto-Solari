import {LogOut} from "lucide-react";
import { UserRoundCog } from 'lucide-react';
import { Settings } from 'lucide-react';
import { BookMark } from 'lucide-react';

function ProfileDropdown({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="w-xs h-72 absolute top-14 right-0 bg-zinc-800 rounded-lg shadow-lg z-50 text-white font-medium flex flex-col gap-3 space-y-6">
      <div className="flex">
        <img src="../" alt="Profile" />
        <h2 className="text-lg font-bold">John Doe</h2>
      </div>
      <ul className="border w-full p-4">
        <li><UserRoundCog />Manage Profile</li>
        <li><Settings />Account Settings</li>
        <li><BookMark />Watchlist</li>
        <li>Help Center</li>
      </ul>
      <button className="flex gap-5 border-2 border-yellow-400 rounded-md p-2 text-yellow-400 cursor-pointer w-"><LogOut /> Sign Out</button>
    </div>
  );
}

export default ProfileDropdown;
