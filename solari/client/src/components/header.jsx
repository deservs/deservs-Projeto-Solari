import { useState } from "react";
import { Search, Bell, UserRound } from "lucide-react";

import ProfileDropdown from "./profile-dropdown.jsx";

import Logo_Solari from "../assets/Logo_Solari.svg";
import "../styles/header.css";
function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="flex items-center gap-[3vw] p-4 top-0 sticky bg-black/60 backdrop-blur-xl border-b-[0.5px] border-white/30 z-50 w-full">
      <div className="flex items-center cursor-pointer hover:[&>h1]:text-yellow-400 [&>h1]:transition-colors">
        <img
          src={Logo_Solari}
          className="w-[7vw] h-[7vw] mr-2"
          alt="Solari logo"
        />
        <h1 className="text-[2.5vw] font-bold text-white text-center">
          Solaris
        </h1>
      </div>
      <ul className="flex gap-8 text-white items-center [&>li]:cursor-pointer [&>li]:hover:text-yellow-400 [&>li]:font-medium [&>li]:text-[1.5vw] [&>li]:text-center">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Série</a>
        </li>
        <li>
          <a>Desenhos</a>
        </li>
        <li>
          <a>Anime</a>
        </li>
      </ul>
      <div className="relative flex items-center gap-2">
        <input
          id="search-input"
          type="text"
          className="peer bg-zinc-800 text-white text-[1.5vw] rounded-full p-2 pl-[3vw] w-[35vw] outline-0 border-2 border-transparent focus:border-yellow-400 focus:caret-yellow-400"
          placeholder="Search..."
        />
        <label
          htmlFor="search-input"
          className="absolute p-2 pointer-events-none text-zinc-700 peer-focus:text-yellow-400 transition-colors"
        >
          <Search size="2vw" />
        </label>
      </div>
      <div className="flex gap-5 items-center">
        <button className="cursor-pointer hover:text-yellow-400 text-xl font-medium h-[3vw] w-[3vw] flex items-center justify-center rounded-full text-zinc-500">
          <Bell size="2vw" />
        </button>
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="cursor-pointer hover:text-yellow-400 text-xl font-medium h-[4vw] w-[4vw] bg-amber-50 items-center flex justify-center rounded-full text-zinc-500 [&>img]:rounded-full [&>img]:w-[4vw] [&>img]:h-[4vw]"
          >
            {/*<img src="/src/assets/foto_meme.png" alt="Profile" />*/}
            <UserRound size="2vw" />
          </button>
          <ProfileDropdown size="4vw" isOpen={isProfileOpen} />
        </div>
      </div>
    </header>
  );
}
export default Header;
