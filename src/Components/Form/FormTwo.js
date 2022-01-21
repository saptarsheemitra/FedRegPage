import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import BasicTextInput from "./BasicITextInput";
import RadioInputs from "./RadioInputs";
import RadioInput2 from "./RadioInput2";
import FormCss from "./CSS/FormOne.module.css";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const FormTwo = (props) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  const [error, setError] = useState(null);
  const collegeMailRef = useRef();
  const teamNameRef = useRef();
  const collegeNameRef = useRef();
  const currentYearRef = useRef();
  const dispatch = useDispatch();

  const backFunction = () => {
    //delete the basic details one and repopulate the form
    dispatch({ type: "deleteBasicDetailsOne" });
    props.formState("first");
  };
  const nextFunction = async () => {
    if (
      collegeMailRef.current.value.length === 0 ||
      !collegeMailRef.current.value.includes("@")
    ) {
      setError("Email is not valid");
      return;
    } else if (teamNameRef.current.value.length === 0) {
      setError("Team name is required");
      return;
    }
    let currentYear = null;
    for (let i = 0; i < 5; i++) {
      if (currentYearRef.current[i].checked === true)
        currentYear = currentYearRef.current[i].value;
    }
    if (!currentYear) {
      setError("please select current year");
      return;
    }

    let collegeName;
    console.log(collegeNameRef);
    if (collegeNameRef.current[0].checked) {
      console.log("kiit");
      collegeName = "KIIT";
    } else if (collegeNameRef.current[1].value.length !== 0) {
      console.log("other");
      collegeName = collegeNameRef.current[1].value;
    } else {
      console.log("error");
      setError("College name is required");
      return;
    }

    // CHECK DATABASE FOR DUPLICATE EMAIL
    // const url = "http://64.227.160.134:80/fedReg/checkBoth";
    // const response = await axios.post(url, {
    //   clgmail: collegeMailRef.current.value,
    //   teamname: teamNameRef.current.value,
    // });
    // if (response.data.error) {
    //   setError(response.data.error);
    //   console.log(response.data.error);
    //   return;
    // }

    dispatch({
      type: "basicDetailsTwo",
      data: {
        collegeEmailId: collegeMailRef.current.value,
        teamName: teamNameRef.current.value,
        collegeName: collegeName,
        currentYear: currentYear,
      },
    });
    // navigate("/three");
    props.formState("frame31");
  };
  return (
    <div
      className={FormCss.fOnemDiv}
      id={isLightTheme === false ? FormCss.darkform : "darkFormOne"}
    >
      <div className={FormCss.contDiv}>
        <BasicTextInput
          error={
            (error === "Email is not valid" ||
              error === "Email and Team name already registered" ||
              error === "Email already in use") &&
            error
          }
          ref={collegeMailRef}
          name="College Email Id"
          label="College Email Id"
        />
        <BasicTextInput
          error={
            (error === "Team name already exists. Try again" ||
              error === "Team name is required") &&
            error
          }
          ref={teamNameRef}
          name="Team Name"
          label="Team Name"
        />
        <RadioInput2
          ref={collegeNameRef}
          error={error === "College name is required" && error}
        />
        <RadioInputs
          error={error === "please select current year" && error}
          ref={currentYearRef}
          question="Which Year"
          radioList={["First", "Second", "Third", "Fourth", "Other"]}
        />
      </div>

      <button
        onClick={backFunction}
        className={FormCss.backBtn}
        id={isLightTheme === false ? FormCss.darknextN : "btnN"}
      >
        Back
      </button>
      <button
        onClick={backFunction}
        className={FormCss.backBtnMobo}
        id={isLightTheme === false ? FormCss.darknext : "btnNMobo"}
      >
        <ArrowBackIcon />
      </button>
      <button
        onClick={nextFunction}
        className={FormCss.nextBtn}
        id={isLightTheme === false ? FormCss.darknextN : "btnN"}
      >
        Next
      </button>
    </div>
  );
};

export default FormTwo;
