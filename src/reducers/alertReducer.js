import { ALERT_HIDE, ALERT_SET } from "../actions/alertActions";

const initialState = {
  message: "",
  type: "error", // success | error | info | warning,
  visible: false,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SET:
      const { message, type } = action.payload;
      return { ...state, message, type, visible: true };

    case ALERT_HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default alertReducer;
