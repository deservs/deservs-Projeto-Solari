import { useState } from "react";
import { Search, Bell, UserRound, Menu, Compass } from "lucide-react";

import ProfileDropdown from "./profile-dropdown.jsx";

import Logo_Solari from "../../../assets/Logo_Solari.svg";

import "./header.css";

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <header>
        <div id="div_LogoMenu">
          <div id="Logotype">
            <img src={Logo_Solari} alt="Solari logo" />
            <h1>Solaris</h1>
          </div>
        </div>
        <ul id="nav">
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
        <div id="nav_input">
          <input id="search-input" type="text" placeholder="Search..." />
          <label className="icone" htmlFor="search-input">
            <Search />
          </label>
        </div>
        <div id="nav_user">
          <button>
            <Bell />
          </button>
          <div>
            <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
              {/*<img src="/src/assets/foto_meme.png" alt="Profile" />*/}
              <UserRound />
            </button>
            <ProfileDropdown
              isOpen={isProfileOpen}
              onClose={() => setIsProfileOpen(false)}
            />
          </div>
        </div>
      </header>
      <div id="bottom-menu">
        <ul>
          <li>
            <Menu />
            <a>Home</a>
          </li>
          <li>
            <Compass />
            <a>Explorar</a>
          </li>
          <li>
            <Search />
            <a>Buscar</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
