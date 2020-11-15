export const LOADERS_SET = "@loaders/set";

export function setLoader(namespace, key, value) {
  return {
    type: LOADERS_SET,
    namespace,
    key,
    value,
  };
}
