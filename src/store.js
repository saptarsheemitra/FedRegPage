import { createStore } from "redux";

const initialState = {
  basicDetails1: {
    firstname: null, //
    contactNumber: null,
    lastname: null, //
    pronoun: null,
  },
  basicDetails2: {
    collegeEmailId: null, //y
    // contactNumber: null, //
    collegeName: null,
    teamName: null,
    currentYear: null,
  },
  teamOrSolo: null,
  teamLeaderDetails: {
    firstname: null,
    lastname: null,
    collegeEmailId: null,
    contactNumber: null,
  },
  secondMemberDetails: {
    firstname: null,
    lastname: null,
    collegeEmailId: null,
    contactNumber: null,
  },
  thirdMemberDetails: {
    firstname: null,
    lastname: null,
    collegeEmailId: null,
    contactNumber: null,
  },
  attendedOtherEvent: null,
  whichOne: null,
  source: null,
  isLightTheme: true,
  isMobile: false,
};

const reducerFunction = (state = initialState, action) => {
  if (action.type === "basicDetailsOne") {
    let newState = { ...state };
    const obj = {
      firstName: action.data.firstName,
      lastName: action.data.lastName,
      contactNumber: action.data.contactNumber,
      pronoun: action.data.pronoun,
    };
    newState.basicDetails1 = {
      ...obj,
    };
    localStorage.setItem("basicDetailsOne", JSON.stringify(obj));
    console.log("basicDetailsOne");
    console.log(newState);
    return newState;
  } else if (action.type === "basicDetailsTwo") {
    let newState = { ...state };
    const obj = {
      collegeEmailId: action.data.collegeEmailId,
      teamName: action.data.teamName,
      collegeName: action.data.collegeName,
      currentYear: action.data.currentYear,
    };
    newState.basicDetails2 = {
      ...obj,
    };
    console.log("basicDetailsTwo");
    console.log(newState);
    return newState;
  } else if (action.type === "teamOrSolo") {
    let newState = { ...state };
    newState.teamOrSolo = action.teamOrSolo;
    console.log("teamOrSolo");
    console.log(newState);
    return newState;
  } else if (action.type === "teamLeaderDetails") {
    let newState = { ...state };
    const obj = {
      firstname: action.data.firstName,
      lastname: action.data.lastName,
      collegeEmailId: action.data.collegeEmailId,
      contactNumber: action.data.contactNumber,
    };
    newState.teamLeaderDetails = {
      ...obj,
    };
    console.log("teamLeaderDetails");
    console.log(newState);
    return newState;
  } else if (action.type === "secondMemberDetails") {
    let newState = { ...state };
    const obj = {
      firstname: action.data.firstName,
      lastname: action.data.lastName,
      collegeEmailId: action.data.collegeEmailId,
      contactNumber: action.data.contactNumber,
    };
    newState.secondMemberDetails = {
      ...obj,
    };
    console.log("secondMemberDetails");
    console.log(newState);
    return newState;
  } else if (action.type === "thirdMemberDetails") {
    let newState = { ...state };
    const obj = {
      firstname: action.data.firstName,
      lastname: action.data.lastName,
      collegeEmailId: action.data.collegeEmailId,
      contactNumber: action.data.contactNumber,
    };
    newState.thirdMemberDetails = {
      ...obj,
    };
    console.log("thirdMemberDetails");
    console.log(newState);
    return newState;
  } else if (action.type === "attendedOtherEvent") {
    let newState = { ...state };
    newState.attendedOtherEvent = action.attendedOtherEvent;
    console.log("attendedOtherEvent");
    console.log(newState);
    return newState;
  } else if (action.type === "whichOne") {
    let newState = { ...state };
    newState.whichOne = action.whichOne;
    console.log("whichOne");
    console.log(newState);
    return newState;
  } else if (action.type === "source") {
    let newState = { ...state };
    newState.source = action.source;
    console.log("source");
    console.log(newState);
    return newState;
  } else if (action.type === "toggleTheme") {
    let newState = { ...state };
    newState.isLightTheme = !state.isLightTheme;
    console.log(newState.isLightTheme);
    return newState;
  } else if (action.type === "deleteBasicDetailsOne") {
    let newState = { ...state };
    newState.basicDetails1 = initialState.basicDetails1;
    console.log("delete basic detail one");
    console.log(newState);
    return newState;
  } else if (action.type === "deleteBasicDetailsTwo") {
    let newState = { ...state };
    newState.basicDetails2 = initialState.basicDetails2;
    console.log("delete basic detail two");
    console.log(newState);
    return newState;
  } else if (action.type === "deleteFormThreeDetails") {
    let newState = { ...state };
    newState.teamOrSolo = initialState.teamOrSolo;
    newState.teamLeaderDetails = initialState.teamLeaderDetails;
    newState.secondMemberDetails = initialState.secondMemberDetails;
    newState.thirdMemberDetails = initialState.thirdMemberDetails;
    console.log("delete details of third form");
    console.log(newState);
    return newState;
  } else if (action.type === "isMobile") {
    let newState = { ...state };
    newState.isMobile = action.isMobile;
    return newState;
  } else if (action.type === "clearReduxState") {
    let newState = { ...initialState };
    return newState;
  }
  return state;
};

const store = createStore(reducerFunction);

export default store;
