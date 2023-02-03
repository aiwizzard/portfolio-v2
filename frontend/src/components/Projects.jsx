import { useSelector } from "react-redux";
import ProjectItem from "./ProjectItem";

function Projects() {
  const projects = useSelector((state) => state.user.details ? state.user.details["projects"]: null);
  return (
    <>
      {projects && (
        <div className="flex flex-col items-center justify-center my-20">
          <h3 className="text-4xl text-center text-gray-700 font-bold mb-10 mt-4 bg-clip-text">
            Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 md:w-8/12 xl:w-6/12">
            {projects.map((project) => {
              return <ProjectItem key={project.id} project={project} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
