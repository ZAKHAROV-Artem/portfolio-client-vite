import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AboutMePage from "../pages/AboutMePage";
import MainPage from "../pages/MainPage";
import NotfoundPage from "../pages/NotfoundPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";

const AppRouter: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
