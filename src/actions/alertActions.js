export const ALERT_SET = "@alert/set";
export const ALERT_HIDE = "@alert/hide";

export function setAlert(message, type = "error") {
  return {
    type: ALERT_SET,
    payload: {
      message,
      type,
    },
  };
}

export function hideAlert() {
  return {
    type: ALERT_HIDE,
  };
}
