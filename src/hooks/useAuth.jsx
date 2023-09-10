import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (email, password) => {
    setAuthUser(email);
    //save in localstorage
    //try useEffect later
    localStorage.setItem("user", email);
    console.log("successful login, navigate to homepage");
  };

  const signup = () => {};

  const logout = () => {
    if (authUser === null) {
      console.log("user not logged in");
    } else {
      setAuthUser(null);
      localStorage.removeItem("user");
      console.log("user is logged out");
    }
  };

  // return { user, login, signup, logout };
  return { login, logout };
};
