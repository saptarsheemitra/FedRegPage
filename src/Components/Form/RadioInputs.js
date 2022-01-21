import React from "react";
import FrCss from "./CSS/Forms.module.css";
import { useSelector } from "react-redux";

const RadioInput = (props) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        className={FrCss.radioInp}
        id={props.value}
      ></input>
      <label
        htmlFor={props.value}
        className={FrCss.radioLable}
        id={isLightTheme === false ? FrCss.darkradio : ""}
      >
        {props.value}
      </label>
    </div>
  );
};

const RadioInputs = React.forwardRef((props, ref) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div className={FrCss.radioDivMainMobo}>
      <h2
        className={FrCss.radioH2}
        id={isLightTheme === false ? FrCss.darkradio : ""}
      >
        {props.question}
      </h2>
      {props.error && <p className={FrCss.radioerr}>{props.error}</p>}
      <form ref={ref}>
        {props.radioList.map((value) => {
          return <RadioInput key={value} value={value} name={props.question} />;
        })}
      </form>
    </div>
  );
});

export default RadioInputs;
