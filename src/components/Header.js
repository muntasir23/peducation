import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";

export default function Header({ open, setUser }) {
  const { currentUser } = useAuth();

  function logout() {
    const auth = getAuth();
    setUser(false);
    localStorage.removeItem("user");
    return signOut(auth);
  }

  return (
    <div className={currentUser ? "header" : "notheader"}>
      {/* <div className="header-left">{currentUser.displayName}</div> */}

      {currentUser ? (
        <>
          <div className="menu-icon" onClick={open}>
            <HiMenuAlt4 />
          </div>
          <div className="header-left">{currentUser.displayName}</div>
          <div className="header-right">
            <button onClick={logout}>
              <IoIosLogOut />
              Logout
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
