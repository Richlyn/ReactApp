import { GET_ITINS, GET_ITINS_ERR } from "../Actions/actionTypes";

const initialState = {
  itineraries: []
  //   loading: false
};

const itineraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITINS:
      console.log("GOT itinerary", action.payload);
      return {
        ...state,
        itineraries: action.payload
      };
    case GET_ITINS_ERR:
      console.log("intinerary err");
      return state;

    default:
      return state;
  }
};
export default itineraryReducer;
