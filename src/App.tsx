import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { LoginContext, User } from "./AuthProvider";

function App() {
  const [user, setUser] = useState<User>({ loggedIn: false });
  // const navigate = useNavigate();

  const login = (email: string, password: string) => {
    if (email === "keh@lani.cc" && password === "1234") {
      setUser({ loggedIn: true, email, password });
      // navigate('/dashboard');
    }
  };

  const logout = () => {
    setUser({ loggedIn: false });
    // navigate("/login");
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
