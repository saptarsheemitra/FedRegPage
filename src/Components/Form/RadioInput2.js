import React, { useState, useRef } from "react";
import FrCss from "./CSS/Forms.module.css";
import { useSelector } from "react-redux";

const RadioInput2 = React.forwardRef((props, ref) => {
  const [dummy, setDummy] = useState("");
  const textRef = useRef();
  const radioRef = useRef();
  const isLightTheme = useSelector((state) => state.isLightTheme);
  const radioSelectFunc = () => {
    if (radioRef.current.checked) {
      textRef.current.value = "";
      setDummy("a");
    }
  };
  const textChangeFunc = () => {
    if (textRef.current.value.length !== 0) {
      radioRef.current.checked = false;
      setDummy("a");
    }
  };
  return (
    <div className={FrCss.textInp}>
      <form ref={ref}>
        <h2
          className={FrCss.radioH2}
          id={isLightTheme === false ? FrCss.darkradio : ""}
        >
          College Name
        </h2>
        <input
          ref={radioRef}
          onChange={radioSelectFunc}
          type="radio"
          name="collegeName"
          value="kiit"
          id="collegeName"
          className={FrCss.radioInp}
        />
        <label
          htmlFor="collegeName"
          className={FrCss.radioLable}
          id={isLightTheme === false ? FrCss.darkradio : ""}
        >
          KIIT
        </label>
        <div>
          <input
            onChange={textChangeFunc}
            ref={textRef}
            id={isLightTheme === false ? FrCss.darkform : ""}
            className={FrCss.impTag}
            placeholder="other"
            type="text"
          ></input>
          {props.error && <p className={FrCss.errorMsg}>{props.error}</p>}
        </div>
      </form>
    </div>
  );
});

export default RadioInput2;
