import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import Avatar from "../src/avatar.png"

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, []);
  return (
    <div className={`nav ${show &&"nav_black"}`}>
      <div className="nav_contents">
        <img
        onClick={() => history.push("/")}
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix logo"
        />
      
        <img
        onClick={()=> history.push("/profile")}
          className="nav_avatar"
          src={Avatar}
          alt="Netflix Avatar"
        />
      </div>
      <div className="nav_l"><p>by Laimonas</p></div>
     
    </div>
  );
}

export default Nav;
