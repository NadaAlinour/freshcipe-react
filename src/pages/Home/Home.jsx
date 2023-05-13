import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
export default function Home() {
  const {authUser, setAuthUser} = useContext(AuthContext);
  const {logout} = useAuth();
    return (
      <>
        <h1 className="placeholder-text">this is home, welcome, {authUser}</h1>
      </>
    );
  }
  