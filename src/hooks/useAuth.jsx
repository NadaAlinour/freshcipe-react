import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { mockValidate } from "../features/validateForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const login = (email, password, persist) => {
    const mockResult = mockValidate(email, password);
    if (mockResult.isValid) {
      setAuthUser(email);
      //save in localstorage
      //try useEffect later
      if (persist) localStorage.setItem("user", email);
      console.log("successful login, navigate to homepage");
    } else console.log("login failed");
    return mockResult;
  };

  const signup = () => {};

  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem("user");
    console.log("user is logged out");
  };

  // return { user, login, signup, logout };
  return { login, logout };
};
