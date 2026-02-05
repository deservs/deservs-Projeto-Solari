import { LogOut } from "lucide-react";
import { UserRoundCog } from "lucide-react";
import { Settings } from "lucide-react";
import { Bookmark } from "lucide-react";
import { MessageCircleQuestionMark } from "lucide-react";

function ProfileDropdown({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="border-2 border-zinc-700 w-xs h-94 absolute top-14 right-0 bg-zinc-800 rounded-lg shadow-lg z-50 text-white font-medium flex flex-col">
      <div className="flex h-24 items-center p-4 gap-4">
        <img
          src="../src/assets/foto_meme.png"
          className="rounded-full h-full w-2/8"
          alt="Profile"
        />
        <h2 className="text-2xl font-bold">John Doe</h2>
      </div>
      <ul className="border-t border-b border-zinc-600 w-full h-50 p-4 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:p-2 [&>li]:cursor-pointer [&>li]:hover:bg-zinc-700 [&>li]:rounded-full [&>li]:hover:text-yellow-400">
        <li>
          <UserRoundCog />
          Manage Profile
        </li>
        <li>
          <Settings />
          Account Settings
        </li>
        <li>
          <Bookmark /> Watchlist
        </li>
        <li>
          <MessageCircleQuestionMark /> Help Center
        </li>
      </ul>
      <div className="flex justify-center p-4">
        <button className="flex gap-5 border-2 border-yellow-400 rounded-md p-2 text-yellow-400 cursor-pointer w-full justify-center hover:bg-yellow-400 hover:text-black transition-colors">
          <LogOut /> Sign Out
        </button>
      </div>
    </div>
  );
}

export default ProfileDropdown;
