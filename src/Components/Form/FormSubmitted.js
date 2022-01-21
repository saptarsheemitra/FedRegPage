import React from "react";
import { Link } from "react-router-dom";
import FSubCss from "./CSS/SubmitForm.module.css";

import img0 from "./../../ReqImg/Rectangle.jpg";
import img1 from "./../../ReqImg/twitter.png";
import img2 from "./../../ReqImg/linkedin.png";
import img3 from "./../../ReqImg/instagram.png";
import imgGif from "./../../ReqImg/success.gif";

import { useSelector } from "react-redux";
const FormSubmitted = () => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div
      className={FSubCss.fOnemDiv}
      id={isLightTheme === false ? FSubCss.darkform : "darkFormOne"}
    >
      <div className={FSubCss.mCOnDiv}>
        <p className={FSubCss.ThanksP}>
          Team FED can't wait to have you aboard. Thankyou for registering in
          Fedestate Battles. Best of Luck,
          <br />
          see you at the event.
        </p>
        <img src={imgGif} alt="" className={FSubCss.successGif} />
        {/* <a href="" className={FSubCss.LinkTweet} target="_blank">
          Tweet about this event
        </a> */}
        <div className={FSubCss.socialDiv}>
          <p className={FSubCss.followP}>Follow us on</p>
          <div className={FSubCss.socialIconsDiv}>
            {/* <a href="" target="_blank">
              <img src={img1} alt="" className={FSubCss.socialIcons} />
            </a> */}
            <a href="https://www.linkedin.com/company/fedkiit/" target="_blank">
              <img src={img2} alt="" className={FSubCss.socialIcons} />
            </a>
            <a href="https://www.instagram.com/fedkiit/" target="_blank">
              <img src={img3} alt="" className={FSubCss.socialIcons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSubmitted;
