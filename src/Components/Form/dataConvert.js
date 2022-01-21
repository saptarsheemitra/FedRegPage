const dataConvert = (state, advert, event) => {
  let obj = {
    firstname: state.basicDetails1.firstName,
    lastname: state.basicDetails1.lastName,
    contact: state.basicDetails1.contactNumber,
    teamname: state.basicDetails2.teamName,
    year: state.basicDetails2.currentYear,
    clgmail: state.basicDetails2.collegeEmailId,
    clg: state.basicDetails2.collegeName,
    pronoun: state.basicDetails1.pronoun,
    mobile: state.basicDetails1.contactNumber,
    team: state.teamOrSolo === true ? "true" : "false",
    advert: advert,
    firsttime: state.attendedOtherEvent === true ? "false" : "true",
  };
  if (state.teamOrSolo) {
    obj = {
      ...obj,
      teamleader: {
        firstname: state.teamLeaderDetails.firstname,
        lastname: state.teamLeaderDetails.lastname,
        contact: state.teamLeaderDetails.contactNumber,
        clgmail: state.teamLeaderDetails.collegeEmailId,
      },
      teamdetails: {
        firstmember: {
          firstname: state.secondMemberDetails.firstname,
          lastname: state.secondMemberDetails.lastname,
          contact: state.secondMemberDetails.contactNumber,
          clgmail: state.secondMemberDetails.collegeEmailId,
        },
        secondmember: {
          firstname: state.thirdMemberDetails.firstname,
          lastname: state.thirdMemberDetails.lastname,
          contact: state.thirdMemberDetails.contactNumber,
          clgmail: state.thirdMemberDetails.collegeEmailId,
        },
      },
    };
  }
  if (state.attendedOtherEvent) {
    obj = {
      ...obj,
      event: event,
    };
  }
  return obj;
};

export default dataConvert;

// {
//   "firstname": "anubhav",
//   "lastname": "rawat",
//   "contact": "9012411113",
//   "teamname": "teamone",
//   "year": "second",
//   "clgmail": "2030012@kiit.ac.in",
//   "clg": "KIIT",
//   "pronoun": "He/Him",
//   "mobile": "9548284039",
//   "team": "true",
//   "teamdetails": {
//     "firstmember": {
//       "firstname": "anubhav",
//       "lastname": "rawat",
//       "contact": "9548284039",
//       "clgmail": "2030012@kiit.ac.in"
//     },
//     "secondmember": {
//       "firstname": "anubhav",
//       "lastname": "rawat",
//       "contact": "9548284039",
//       "clgmail": "2030012@kiit.ac.in"
//     }
//   },
//   "teamleader": {
//     "firstname": "anubhav",
//     "lastname": "rawat",
//     "contact": "9012411113",
//     "clgmail": "2030012@kiit.ac.in"
//   },
//   "advert": "instagram",
//   "firsttime": "false",
//   "event": "stonkoholic"
// }
