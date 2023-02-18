import  { createContext, useContext } from "react";

export type User = {
  loggedIn: boolean;
  email?: string;
  password?: string;
};

type UserContextType = {
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const LoginContext = createContext<UserContextType>({
  user: { loggedIn: false },
  login: () => {},
  logout: () => {},
});

export const useUser = () => {
  return useContext(LoginContext);
};
