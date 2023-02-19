import { useEffect, useReducer } from "react";
import { UserContext, UserContextType } from "./UserContext";
import { defaultUserState, UserReducer } from "./UserReducer";

type Props = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: Props) => {
  const [userState, dispatchUser] = useReducer(UserReducer, defaultUserState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatchUser({ type: "LOGOUT" });
    }, 120000);
    return () => clearTimeout(timeout);
  }, [userState.isLoggedIn]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatchUser({ type: "LOGIN", payload: JSON.parse(storedUser) });
    }
  }, []);

  useEffect(() => {
    if (userState.isLoggedIn) {
      localStorage.setItem("user", JSON.stringify(userState));
    } else {
      localStorage.removeItem("user");
    }
  }, [userState]);

  const login = (email: string, password: string) => {
    dispatchUser({ type: "LOGIN", payload: { email, password } });
  };

  const logout = () => {
    dispatchUser({ type: "LOGOUT" });
  };

  const userContextValue: UserContextType = {
    email: userState.email,
    password: userState.password,
    isLoggedIn: userState.isLoggedIn,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
