import React from "react";
import { useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
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

        <Route path="/bank" element={<div><h2>Bank App</h2><Outlet/></div>}>
          <Route
            path="deposit"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Deposit />
              </Protected>
            }
          />
          <Route
            path="withdraw"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Withdraw />
              </Protected>
            }
          />
        </Route>

        <Route path="/NotesApp" element={<ProjectStart />} />
        <Route path="*" element={<h1>Error Page!</h1>} />
      </Routes>
    </div>
  );
}

function Protected({ isLoggedIn, children }) {
  // console.log(props)
  if (isLoggedIn) return children;
  return <Navigate to="/" replace />;
}
