import { useSelector } from "react-redux";
import Projects from "../components/Projects";
import TopNavBar from "../components/TopNavbar";

function ProjectsPage() {
  const userDetails = useSelector((state) => state.user.details);
  return (
    <>
      {userDetails && (
        <div>
          <TopNavBar />
          <Projects />
        </div>
      )}
    </>
  );
}

export default ProjectsPage;
