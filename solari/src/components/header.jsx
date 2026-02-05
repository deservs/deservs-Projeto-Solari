import { useState } from "react";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { UserRound } from "lucide-react";

import ProfileDropdown from "./profile-dropdown.jsx";

import Logo_Solari from "../assets/logo_solari.svg";
import "../styles/header.css";
function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="flex items-center gap-10 p-4 top-0 sticky bg-black/80 backdrop-blur-xl border-b-[0.5px] border-white/30 z-50">
      <div className="flex items-center cursor-pointer">
        <img
          src={Logo_Solari}
          className="w-5 md:w-10 lg:w-15"
          alt="Solari logo"
        />
        <h1 className="text-4xl font-bold text-white text-center">Solaris</h1>
      </div>
      <ul className="flex gap-10 text-white items-center">
        <li>
          <a className="cursor-pointer hover:text-yellow-400 text-xl font-medium">
            Home
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-yellow-400 text-xl font-medium">
            TV Shows
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-yellow-400 text-xl font-medium">
            Cartoons
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-yellow-400 text-xl font-medium">
            Anime
          </a>
        </li>
      </ul>
      <div className="relative flex items-center gap-2">
        <input
          id="search-input"
          type="text"
          className="peer bg-zinc-800 text-white rounded-full p-2 pl-9 w-96 outline-0 border-2 border-transparent focus:border-yellow-400 focus:caret-yellow-400"
          placeholder="Search..."
        />
        <label
          htmlFor="search-input"
          className="absolute p-1.5 pointer-events-none text-zinc-700 peer-focus:text-yellow-400 transition-colors"
        >
          <Search />
        </label>
      </div>
      <div className="flex ml-10 gap-5 items-center">
        <button className="cursor-pointer hover:text-yellow-400 text-xl font-medium h-8 w-8 flex items-center justify-center rounded-full text-zinc-500">
          <Bell />
        </button>
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="cursor-pointer hover:text-yellow-400 text-xl font-medium h-12 w-12 bg-amber-50 items-center flex justify-center rounded-full text-zinc-500"
          >
            <UserRound className="items-center" />
          </button>
          <ProfileDropdown isOpen={isProfileOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
