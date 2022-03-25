import React from "react";
import { Route, Routes } from "react-router-dom";

// Page
import Home from "./pages/Home";
import AboutAuthor from "./pages/AboutAuthor/index";
import AboutApp from "./pages/AboutApp/index";
import NotFound from "./pages/NotFound/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About/About-app" element={<AboutApp />} />
      <Route path="/About/About-author" element={<AboutAuthor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
