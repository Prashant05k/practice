import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;

// In this component, the if statement is used to check whether the user is authenticated. If they are not, Navigate from react-router-dom redirects them to the home page. However, if the user is authenticated, the child component is rendered.
