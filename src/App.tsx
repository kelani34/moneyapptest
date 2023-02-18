import React, { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { LoginContext, User } from "./AuthProvider";

function App() {
  const [user, setUser] = useState<User>(
    JSON.parse(sessionStorage.getItem("user") || "{}")
  );

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user") || "{}"));
    console.log("user");
  }, [user.loggedIn]);
  console.log("user", user);
  console.log("user", user);

  const login = (email: string, password: string) => {
    if (email === "keh@lani.cc" && password === "1234") {
      sessionStorage.setItem(
        "user",
        JSON.stringify({ loggedIn: true, email, password })
      );
      window.location.href = "/profile";
    }
  };

  const logout = () => {
    sessionStorage.setItem("user", JSON.stringify({ loggedIn: false }));
    window.location.reload();
  };

  return (
    <>
      <LoginContext.Provider value={{ user, login, logout }}>
        <Router>
          <Routes>
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </>
  );
}

export default App;
