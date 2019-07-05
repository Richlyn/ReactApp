import { GET_ACTIVITIES, GET_ACTIVITIES_ERR } from "./actionTypes";
import axios from "axios";

export const getActivs = () => {
  return dispatch => {
    axios
      .get("http://localhost:5000/api/activities")
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_ACTIVITIES,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ACTIVITIES_ERR,
          payload: err
        })
      );
  };
};
