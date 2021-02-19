import {
  FETCH_SMURF_DATA_FAILURE,
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  ADD_SMURF_DATA_FAILURE,
  ADD_SMURF_DATA_START,
  ADD_SMURF_DATA_SUCCESS,
  SUBMIT_ERROR,
} from "../actions/index";

export const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        isloading: true,
      };
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case FETCH_SMURF_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case ADD_SMURF_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SUBMIT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
