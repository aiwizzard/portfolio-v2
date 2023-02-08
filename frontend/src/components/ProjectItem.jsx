import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function ProjectItem({ project }) {
  const navigate = useNavigate();
  const [html, setHTML] = useState({__html: ""});
  useEffect(() => {
    setHTML({__html: project.description});
  }, [])
  return (
    <>
      <div className="max-w-sm rounded cursor-pointer" onClick={() => navigate(`/projects/${project.id}`)}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{project.title}</div>
          <p className="text-gray-700 text-base text-center" dangerouslySetInnerHTML={html}></p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {project.tags.map((tag) => {
            return (
              <span
                key={tag.id}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag.name}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
