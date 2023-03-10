import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
