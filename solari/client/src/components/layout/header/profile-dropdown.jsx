import {
  LogOut,
  UserRoundCog,
  Settings,
  Bookmark,
  MessageCircleQuestionMark,
  X,
} from "lucide-react";

import { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import LogoSolari from "../../../assets/Logo_Solari.svg";

function ProfileDropdown({ isOpen, onClose }) {
  const [usuarios, setUsuarios] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Erro ao buscar usuários:", error));
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (typeof onClose === "function") {
          onClose();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, onClose]);
  const navigate = useNavigate();
  function link(path) {
    navigate(path);
  }
  if (!isOpen) return null;
  if (false) {
    return (
      <div id="pf-d-login" className="pf-dropdown" ref={dropdownRef}>
        <h1>Entre para assistir</h1>
        <button onClick={() => link("/login")}>
          <LogOut id="ico" /> Log in
        </button>
      </div>
    );
  } else {
    return (
      <div  className="pf-dropdown" ref={dropdownRef}>
        <div id="profile-topo">
          <div id="profile-logo">
            <img src={LogoSolari} alt="Solari Logo" />
            <h1>Solari</h1>
          </div>
          <div id="profile-close">
            <button onClick={onClose}>
              <X />
            </button>
          </div>
        </div>
        <div id="profile-info">
          <img src="../src/assets/foto_meme.png" alt="Profile" />
          <h2>{usuarios.length > 0 ? usuarios[1].nome : "Loading..."}</h2>
        </div>
        <hr />
        <ul id="profile-choose">
          <li onClick={() => link("/manage-profile")}>
            <UserRoundCog />
            <p>Manage Profile</p>
          </li>
          <li>
            <Settings />
            <p>Account Settings</p>
          </li>
          <li>
            <Bookmark />
            <p>Watchlist</p>
          </li>
          <li>
            <MessageCircleQuestionMark />
            <p>Help Center</p>
          </li>
        </ul>
        <hr />
        <div id="profile-button">
          <button>
            <LogOut /> Sign Out
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileDropdown;
