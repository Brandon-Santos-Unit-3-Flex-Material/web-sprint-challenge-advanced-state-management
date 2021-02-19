import axios from "axios";
export const FETCH_SMURF_DATA_FAILURE = "FETCH_SMURF_DATA_FAILURE";
export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const ADD_SMURF_DATA_FAILURE = "ADD_SMURF_DATA_FAILURE";
export const ADD_SMURF_DATA_START = "ADD_SMURF_DATA_START";
export const ADD_SMURF_DATA_SUCCESS = "ADD_SMURF_DATA_SUCCESS";
export const SUBMIT_ERROR = "SUBMIT_ERROR";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_DATA_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("SMURF DATA IN GET:", res);
      dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("ERROR IN GET:", err);
      dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.message });
    });
};
export const addSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: ADD_SMURF_DATA_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log("SMURF DATA IN ADD:", res);
      dispatch({ type: ADD_SMURF_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("ERROR IN ADD:", err);
      dispatch({ type: ADD_SMURF_DATA_FAILURE, payload: err.message });
    });
};

export const setError = (error) => (dispatch) => {
  dispatch({ type: SUBMIT_ERROR, payload: error });
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state. SetError is name.
