type UserAction =
  | { type: "LOGIN"; payload: { email: string; password: string } }
  | { type: "LOGOUT" };

interface UserState {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

export const defaultUserState = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export const UserReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "LOGIN":
      if (
        action.payload.email === "test@test.com" &&
        action.payload.password === "1234"
      ) {
        const updatedState: UserState = {
          email: action.payload.email,
          password: action.payload.password,
          isLoggedIn: true,
        };
        localStorage.setItem("user", JSON.stringify(updatedState));
        return updatedState;
      } else {
        localStorage.removeItem("user");
        return defaultUserState;
      }
    case "LOGOUT":
      localStorage.removeItem("user");
      return defaultUserState;
    default:
      return state;
  }
};
