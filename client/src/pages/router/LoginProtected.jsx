import { Navigate } from "react-router-dom";
// redirect an already authorized user to homepage if they go to 
// page, basically for login and signup pages
const LoginProtected = ({ isAuth, children }) => {
  if (isAuth !== "") {
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};
export default LoginProtected;
