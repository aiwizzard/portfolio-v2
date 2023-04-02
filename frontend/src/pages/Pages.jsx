import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectDetailPage from "./ProjectDetailPage";
import ProjectsPage from "./ProjectsPage";
import AddProjectPage from "./AddProjectPage";

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/add-project" element={<AddProjectPage />} />
      <Route exact path="/projects" element={<ProjectsPage />} />
      <Route exact path="/projects/:id" element={<ProjectDetailPage />} />
    </Routes>
  );
}

export default Pages;
