import { GET_ITINS, GET_ITINS_ERR } from "./actionTypes";
import axios from "axios";

export const getItins = () => {
  return dispatch => {
    axios
      .get("http://localhost:5000/api/itineraries/${cities.cityName}")
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_ITINS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ITINS_ERR,
          payload: err
        })
      );
  };
};

