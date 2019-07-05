import { GET_ACTIVITIES, GET_ACTIVITIES_ERR } from "../Actions/actionTypes";

const initialState = {
  // activites: []
  //   loading: false
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES:
      console.log("GOT activities", action.payload);
      return {
        ...state,
        activities: action.payload
      };
    case GET_ACTIVITIES_ERR:
      console.log("activity err");
      return state;

    default:
      return state;
  }
};
export default activityReducer;
