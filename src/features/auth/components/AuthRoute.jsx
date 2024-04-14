import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Container from "../../../layouts/Container";
import LoginPage from "../../../pages/LoginPage";

export default function AuthRoute() {
  const isAuthenticated = useSelector((state) => {
    return state.auth.isAuthenticated;
  });
  return isAuthenticated ? (
    <>
      <Navigate to="/" replace />
      <Container />
    </>
  ) : (
    <>
      <Navigate to="/login" replace />
      <LoginPage />
    </>
  );
}
