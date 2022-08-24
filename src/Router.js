import React from "react";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import ProjectStart from "./Project/ProjectStart";
import Deposit from "./TechnicalSuneja/Deposit";
import Withdraw from "./TechnicalSuneja/Withdraw";

export default function Router() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  function Login() {
    setisLoggedIn(true);
  }
  function Logout() {
    setisLoggedIn(false);
  }
  // console.log(isLoggedIn)
  return (
    <div>
      {isLoggedIn ? <button onClick={Logout}>Logout</button> : null}
      {!isLoggedIn ? <button onClick={Login}>Login</button> : null}
      <Routes>
        {/* <Route path="/" element={isLoggedIn ? <App /> : null} /> */}
        <Route path="/" element={<App />} />

        <Route
          path="/deposit"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Deposit />
            </Protected>
          }
        />
        <Route
          path="/withdraw"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Withdraw />
            </Protected>
          }
        />
        <Route path="/NotesApp" element={<ProjectStart />} />
      </Routes>
    </div>
  );
}

function Protected({ isLoggedIn, children }) {
  // console.log(props)
  if (isLoggedIn) return children;
  return <Navigate to="/" replace />;
}
