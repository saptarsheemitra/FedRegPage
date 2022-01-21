import React from "react";
import NavECss from "./CSS/NavEventsDiv.module.css";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default function NavEventsDiv(props) {
  return (
    <div className={NavECss.eventsDiv}>
      <p>{props.pTag}</p>
      <ExpandLessIcon id="darkSvg" />
      <p className={NavECss.newP} id="darkRed">
        {props.New}
      </p>
    </div>
  );
}
