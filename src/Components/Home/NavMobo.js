import React from "react";
import NavEventsDiv from "./NavEventsDiv";
import NavEventsMobo from "./NavEventsMobo";
import "./CSS/MoboPop.css";
import { useSelector } from "react-redux";

export default function NavMobo() {
  const btnClose = async function (e) {
    if (document.getElementById("mDiv")) {
      document.getElementById("mDiv").style.display = "none";
    } else {
      document.getElementById("darkModeNavMobo").style.display = "none";
    }
  };
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div id={isLightTheme === false ? "darkModeNavMobo" : "mDiv"}>
      <div className="cont">
        <div className="closeBtnDiv">
          <button
            onClick={btnClose}
            className="closeBtnMobo"
            id={isLightTheme === false ? "darkX" : ""}
          >
            X
          </button>
        </div>
        <div>
          <NavEventsMobo pTag="Events" new="New!" />
          <p
            className="EventP"
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            Podcasts
          </p>
          <p
            className="EventP"
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            Blogs
          </p>
          <p
            className="EventP"
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            Our Team
          </p>
          <p
            className="EventP"
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            Join us
          </p>
          <NavEventsMobo pTag="Design System" new="New!" />
        </div>
      </div>
    </div>
  );
}
