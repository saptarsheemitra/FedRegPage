import React, { useState } from "react";
import "./CSS/modal.css";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import Frame31 from "./Frame31";
import FormFour from "./FormFour";
import FormSubmitted from "./FormSubmitted";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useSelector, useDispatch } from "react-redux";

const Modal = (props) => {
  const isMobile = useSelector((state) => state.isMobile);
  const isLightTheme = useSelector((state) => state.isLightTheme);
  const dispatch = useDispatch();
  const [form, setForm] = useState("first");
  const closeModal = () => {
    localStorage.clear();
    dispatch({ type: "clearReduxState" });
    props.modal(false);
  };
  const themeAttribute = isLightTheme
    ? { backgroundColor: "#f8f8f8" }
    : { backgroundColor: "#0f0e0e" };
  return (
    <div>
      {isMobile ? (
        <div
          style={themeAttribute}
          className="modal-card"
          id={isLightTheme === false ? "darkmodal" : ""}
        >
          {form === "first" && <FormOne formState={setForm} />}
          {form === "second" && <FormTwo formState={setForm} />}
          {form === "frame31" && <Frame31 formState={setForm} />}
          {form === "third" && <FormThree formState={setForm} />}
          {form === "fourth" && <FormFour formState={setForm} />}
          {form === "submitted" && <FormSubmitted />}
          <button onClick={closeModal}>
            <HighlightOffIcon fontSize="large" className="closeBtn" />
          </button>
        </div>
      ) : (
        <div className="backdrop">
          <div
            className="modal-card"
            id={isLightTheme === false ? "darkmodal" : ""}
          >
            {form === "first" && <FormOne formState={setForm} />}
            {form === "second" && <FormTwo formState={setForm} />}
            {form === "frame31" && <Frame31 formState={setForm} />}
            {form === "third" && <FormThree formState={setForm} />}
            {form === "fourth" && <FormFour formState={setForm} />}
            {form === "submitted" && <FormSubmitted />}
            <button onClick={closeModal}>
              <HighlightOffIcon fontSize="large" className="closeBtn" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
