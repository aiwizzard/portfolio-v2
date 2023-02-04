import { useSelector } from "react-redux";
import Projects from "../components/Projects";

function ProjectsPage() {
  const userDetails = useSelector((state) => state.user.details);
  return (
    <>
      {userDetails && (
        <div>
          <Projects />
        </div>
      )}
    </>
  );
}

export default ProjectsPage;
