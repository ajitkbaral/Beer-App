export const getValueFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setValueToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
