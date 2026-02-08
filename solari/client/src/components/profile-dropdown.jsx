import {
  LogOut,
  UserRoundCog,
  Settings,
  Bookmark,
  MessageCircleQuestionMark,
} from "lucide-react";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function ProfileDropdown({ isOpen }) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Erro ao buscar usuários:", error));
  }, []);
  const navigate = useNavigate();
  function link(path) {
    navigate(path);
  }
  if (!isOpen) return null;
  if (false) {
    return (
      <div className="border-2 gap-6 pt-[1.5vh] border-zinc-700 w-xs h-[20vh] absolute top-14 right-0 bg-zinc-800 rounded-lg shadow-lg z-50 text-white text-[2vw] font-medium flex flex-col items-center">
        <h1>Entre para assistir</h1>
        <button
          onClick={() => link("/login")}
          className="flex items-center gap-5 border-2 text-[1.75vw] border-yellow-400 rounded-md p-2 text-yellow-400 cursor-pointer w-[80%] justify-center hover:bg-yellow-400 hover:text-black transition-colors"
        >
          <LogOut size="2vw" /> Log in
        </button>
      </div>
    );
  } else {
    return (
      <div className="border-2 border-zinc-700 w-xs h-[52vh] absolute top-14 right-0 bg-zinc-800 rounded-lg shadow-lg z-50 text-white font-medium flex flex-col">
        <div className="flex h-24 items-center p-4 gap-4 cursor-default">
          <img
            src="../src/assets/foto_meme.png"
            className="rounded-full h-full w-2/8"
            alt="Profile"
          />
          <h2 className="text-2xl font-bold">{usuarios.length > 0 ? usuarios[1].nome : "Loading..."}</h2>
        </div>
        <ul className="border-t border-b border-zinc-600 w-full h-50 p-4 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:p-2 [&>li]:cursor-pointer [&>li]:hover:bg-zinc-700 [&>li]:rounded-full [&>li]:hover:text-yellow-400">
          <li onClick={() => link("/manage-profile")}>
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
}

export default ProfileDropdown;
