import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectDetailPage from "./ProjectDetailPage";

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/projects/:id" element={<ProjectDetailPage />} />
    </Routes>
  );
}

export default Pages;
