import { createContext } from "react";

export interface UserContextType {
  email: string;
  password: string;
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const defaultUserContext: UserContextType = {
  email: "",
  password: "",
  isLoggedIn: false,
  login: (email: string, password: string) => {},
  logout: () => {},
};

export const UserContext = createContext<UserContextType>(defaultUserContext);
