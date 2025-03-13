import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeInfoPage from "./pages/RecipeInfoPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipe/:id" element={<RecipeInfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
