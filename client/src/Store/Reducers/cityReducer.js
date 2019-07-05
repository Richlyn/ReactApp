import { GET_CITIES, GET_CITIES_ERR } from "../Actions/actionTypes";

const initialState = {
  //cities: []
  // loading: false
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      console.log("GOT CITIES", action.payload);
      return {
        ...state,
        cities: action.payload
      };

    case GET_CITIES_ERR:
      console.log("err");
      return state;

    default:
      return state;
  }
};
export default cityReducer;
