import React from "react";
import UceCss from "./CSS/Events.module.css";
import UpCommingRegisterDiv from "./UpCommingRegisterDiv";

export default function Events(props) {
  return (
    <div className={UceCss.UcsmDiv}>
      <p className={UceCss.upcomingEventsP} id="darkCGrey">
        {props.eventName}
      </p>
      <div className={UceCss.RegDiv}>
        <UpCommingRegisterDiv
          btnName={props.btnName0}
          showModal={props.showModal}
        />
        {/* <UpCommingRegisterDiv btnName={props.btnName1} /> */}
      </div>
    </div>
  );
}
