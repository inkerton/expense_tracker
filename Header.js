import React from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Header() {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="logo.jpg"
          alt=""
        />
      </Link>
      <div className="info">
        <Link to="/spendings">
          <div className="header_item2">Spendings</div>
        </Link>
        <Link to="/savings"><div className="header_item3">Savings</div></Link>
        <div className="header_item4">
          {isAuthenticated && <p>Welcome {user.name.split("@gmail.com")}</p>}
        </div>
        <Link to="/contact"><div className="header_item5">
          Contact Us
        </div>
        </Link>
        <Link to="/about"><div className="header_item6">
          About
        </div>
        </Link>
        <div className="header_item1">
          {isAuthenticated ? (
            <button className="btn_1"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button className="btn_1" onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
