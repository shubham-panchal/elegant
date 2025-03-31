let initialState = {
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "LOGIN":
      localStorage.setItem("isAuth", true);
      return { ...state, isAuth: true };
    case "LOGOUT":
      localStorage.setItem("isAuth", false);
      return { ...state, isAuth: false };
    default:
      return { ...state, isAuth: false };
  }
};

export default AuthReducer;
