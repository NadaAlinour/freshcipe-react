import { Navigate } from "react-router-dom";
const Protected = ({ isAuth, children }) => {
  console.log(isAuth)
  if (isAuth === "") {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};
export default Protected;
