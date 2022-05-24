import img from "../images/card-top.jpg";

function ProjectItem({ project }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.body}</div>
          <p className="text-gray-700 text-base">{project.body}</p>
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
