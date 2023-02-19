import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserProvider from "./auth/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
