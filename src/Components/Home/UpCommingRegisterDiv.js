import React from "react";
import { Link } from "react-router-dom";
import RegCss from "./CSS/UpCommingRegisterDiv.module.css";
// import "./../../Pages/CSS/Test.css";
import "./CSS/MoboPop.css";
import { useSelector } from "react-redux";

import img0 from "./../../ReqImg/eventLog.jpg";

export default function UpCommingRegisterDiv(props) {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div
      className={RegCss.RegmDiv}
      id={isLightTheme === false ? "darkModeEventBoxbg" : ""}
    >
      <div class={RegCss.flexDiv}>
        <div className={RegCss.DateDiv}>
          <div className={RegCss.DatePDiv}>
            <p id={isLightTheme === false ? "darkModeTitle" : ""}>29</p>
            <p className={RegCss.monthName} id="darkMonthName">
              January
            </p>
          </div>
          <img
            src={img0}
            alt="HammerImg"
            className={RegCss.hammerImg}
            id="hideImg"
          />
        </div>
        <div className={RegCss.rightDiv}>
          <h1
            className={RegCss.h1Title}
            id={isLightTheme === false ? "darkModeTitle" : ""}
          >
            FEDestate Battles
          </h1>
          <p className={RegCss.des} id="darkDes">
            Do you fascinate about being a thriving market tycoon but confused
            about how to? Stop fussing, 'cause we got you all covered. We are
            here with the most enthralling event of the year, the Fedestate
            Battles.
            <br /> A diligent event to provide you with a real-life industrial
            experience featuring a fun learning yet battleground on how the real
            estate sector evolves. An event full of entrepreneurial
            understanding, fun activities, and knowledge worth millions. Where
            you will get the world-class experience, learning that can transform
            your ideas into real projects. Dive into this whole new world of
            diverse experience and knowledge. Registrations are live.
          </p>

          <div className={RegCss.LinkDiv}>
            <Link
              to="/"
              className={RegCss.regBtn}
              onClick={() => {
                props.showModal(true);
              }}
              id={isLightTheme === false ? "darkModeNavBtn" : ""}
            >
              {props.btnName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
