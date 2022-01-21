import React from "react";
import FCss from "./CSS/Forms.module.css";
import { useSelector } from "react-redux";

const BasicTextInput = React.forwardRef((props, ref) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  return (
    <div className={FCss.textInp}>
      {props.label != null ? (
        <label
          htmlFor={props.name}
          className={FCss.lableTag}
          id={isLightTheme === false ? "darkModeTitle" : ""}
        >
          {props.label}
        </label>
      ) : null}

      <input
        id={isLightTheme === false ? FCss.darkform : ""}
        ref={ref}
        name={props.name}
        className={FCss.impTag}
        placeholder={props.name}
        type="text"
      ></input>
      {props.error && <p className={FCss.errorMsg}>{props.error}</p>}
    </div>
  );
});

export default BasicTextInput;
