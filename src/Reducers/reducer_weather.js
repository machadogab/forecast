import { FETCH_WEATHER } from "../Actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    console.log(state)
      return [action.payload.data, ...state];

    default:
      return state;
  }
}