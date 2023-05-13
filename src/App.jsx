import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppRoutes from "./pages/router/AppRoutes";
import { useContext } from "react";
import { useState } from "react";
import "./App.css";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [authUser, setAuthUser] = useState(localStorage.getItem("user"));

  return (
    <>
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        <Navbar />
        <AppRoutes />
      </AuthContext.Provider>
    </>
  );
}

export default App;
