import axios from "axios";

const authMiddleware = (store) => (next) => (action) => {
  const token = store.getState().auth.token;
  console.log(token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  return next(action);
};

export default authMiddleware;
