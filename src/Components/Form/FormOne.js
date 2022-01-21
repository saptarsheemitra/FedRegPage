import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BasicTextInput from "./BasicITextInput";
import RadioInputs from "./RadioInputs";
import FrOneCss from "./CSS/FormOne.module.css";
import { useSelector } from "react-redux";

const FormOne = (props) => {
  const isLightTheme = useSelector((state) => state.isLightTheme);
  const [error, setError] = useState(null);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const contactNumberRef = useRef();
  const pronounRef = useRef();
  const dispatch = useDispatch();

  const nextFunction = async () => {
    if (firstNameRef.current.value.length === 0) {
      setError("First name cannot be empty");
      return;
    } else if (lastNameRef.current.value.length === 0) {
      setError("Last name cannot be empty");
      return;
    } else if (
      isNaN(contactNumberRef.current.value) ||
      contactNumberRef.current.value.length !== 10
    ) {
      setError("Contact number not valid");
      return;
    }
    let pronoun = null;
    for (let i = 0; i < 3; i++) {
      if (pronounRef.current[i].checked === true)
        pronoun = pronounRef.current[i].value;
    }
    if (!pronoun) {
      setError("please select a pronoun");
      return;
    }
    console.log(pronoun);

    // SEND A REQUEST TO CHECK FOR DUPLICATE TEAM NAME

    dispatch({
      type: "basicDetailsOne",
      data: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        contactNumber: contactNumberRef.current.value,
        pronoun: pronoun,
      },
    });
    props.formState("second");
  };
  return (
    <div
      className={FrOneCss.fOnemDiv}
      id={isLightTheme === false ? FrOneCss.darkform : ""}
    >
      <BasicTextInput
        error={error === "First name cannot be empty" && error}
        ref={firstNameRef}
        name="First Name"
        label="Basic Details"
      />
      <BasicTextInput
        ref={lastNameRef}
        name="Last Name"
        error={error === "Last name cannot be empty" && error}
      />
      <BasicTextInput
        ref={contactNumberRef}
        name="Contact Number"
        label="Contact Number"
        error={error === "Contact number not valid" && error}
      />
      <RadioInputs
        ref={pronounRef}
        error={error === "please select a pronoun" && error}
        question="Pronouns"
        radioList={["He/Him", "She/Her", "They/Them"]}
      />
      <button
        onClick={nextFunction}
        className={FrOneCss.nextBtn}
        id={isLightTheme === false ? FrOneCss.darknextN : "btnN"}
      >
        Next
      </button>
    </div>
  );
};

export default FormOne;
