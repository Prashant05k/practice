import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";
import About from "./About";
import { useState } from "react";
import Protected from "./Protected";

function AppLogin() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <>
      <Navbar />
      {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button onClick={logIn}>Login</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route
          path="/profile"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default AppLogin;
