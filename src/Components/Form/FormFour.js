import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioInputs from "./RadioInputs";
import FormCss from "./CSS/FormOne.module.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import dataConvert from "./dataConvert";
import axios from "axios";

const FormFour = (props) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  const teamOrSolo = useSelector((state) => state.teamOrSolo);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const whichOneRef = useRef();
  const knowEventRef = useRef();
  const [stage, setStage] = useState("eventBefore");
  const yesButtonFunc = () => {
    dispatch({ type: "attendedOtherEvent", attendedOtherEvent: true });
    setStage("yes");
  };
  const FirstTimeButtonFunc = () => {
    dispatch({
      type: "attendedOtherEvent",
      attendedOtherEvent: false,
    });
    setStage("this is our First Time");
  };
  const submitFunction = async () => {
    console.log("whichone ref");
    console.log(whichOneRef);
    let whichOne = null;
    for (let i = 0; i < 4; i++) {
      if (whichOneRef.current && whichOneRef.current[i].checked === true)
        whichOne = whichOneRef.current[i].value;
    }
    console.log(whichOne);

    let knowEvent = null;
    for (let i = 0; i < 4; i++) {
      if (knowEventRef.current[i].checked === true)
        knowEvent = knowEventRef.current[i].value;
    }
    console.log(knowEvent);
    //submit both radio inputs
    dispatch({ type: "whichOne", whichOne: whichOne });
    dispatch({ type: "source", source: knowEvent });

    // REQUEST TO SUBMIT THE DATA
    const obj = dataConvert(state, knowEvent, whichOne);
    console.log("the object");
    console.log(obj);

    const url = "https://64.227.160.134:80/fedReg/saveData";
    const response = await axios.post(url, obj);
    if (response.data.error) {
      console.log(response.data.error);
      return;
    }
    props.formState("submitted");
  };

  const backFunction = () => {
    dispatch({ type: "deleteFormThreeDetails" });
    props.formState("frame31");
  };
  return (
    <div
      className={FormCss.fOnemDiv}
      id={isLightTheme === false ? FormCss.darkform : "darkFormOne"}
    >
      <div className={FormCss.contDiv}>
        <div
          className={FormCss.teamP}
          id={isLightTheme === false ? FormCss.darktitle : "h1Play"}
        >
          Team Details
        </div>
        {teamOrSolo === false && (
          <h2 className={FormCss.immaTeam} id={FormCss.tH2}>
            Solo
          </h2>
        )}
        {teamOrSolo === true && (
          <h2 className={FormCss.immaTeam} id={FormCss.tH2}>
            Team Details
          </h2>
        )}
        {stage === "eventBefore" && (
          <div>
            <h1
              className={FormCss.H1have}
              id={isLightTheme === false ? FormCss.darktitle : "h1Play"}
            >
              Have you attended any fed event before?
            </h1>
            <button
              onClick={yesButtonFunc}
              className={FormCss.btn}
              id={isLightTheme === false ? FormCss.darknextN : "btnN"}
            >
              Yes
            </button>
            <button
              onClick={FirstTimeButtonFunc}
              className={FormCss.btn}
              id={isLightTheme === false ? FormCss.darknextN : "marN"}
            >
              This is our first time
            </button>
          </div>
        )}
        {stage !== "eventBefore" && (
          <div>
            <h1
              className={FormCss.H1have}
              id={isLightTheme === false ? FormCss.darktitle : "h1Play"}
            >
              Have you attended any fed event before?
            </h1>
            <h2 className={FormCss.H2have}>{stage}</h2>
          </div>
        )}
        <div className={FormCss.questionsDiv}>
          {stage === "yes" && (
            <RadioInputs
              ref={whichOneRef}
              question="Which One?"
              radioList={["Stonkaholic", "Pitchers", "Omega", "Other"]}
            />
          )}
          {stage !== "eventBefore" && (
            <RadioInputs
              ref={knowEventRef}
              question="How did you get to know about this event?"
              radioList={["Instagram", "Email", "Friends", "Other"]}
            />
          )}
        </div>
      </div>
      <button
        onClick={backFunction}
        className={FormCss.backBtn}
        id={isLightTheme === false ? FormCss.darknextN : "btnN"}
      >
        back
      </button>
      <button
        onClick={backFunction}
        className={FormCss.backBtnMobo}
        id={isLightTheme === false ? FormCss.darknext : "btnNMobo"}
      >
        <ArrowBackIcon />
      </button>
      {stage !== "eventBefore" && (
        <button
          onClick={submitFunction}
          className={FormCss.nextBtn}
          id={isLightTheme === false ? FormCss.darknextN : "btnN"}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default FormFour;
