import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage/MainPage";
import HomePage from "pages/HomePage/HomePage";
// basename={process.env.PUBLIC_URL}
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/register" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
