import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProjectDetails } from "../redux/userActions";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProjectDetailPage() {
  const projectDetails = useSelector((state) => state.user.projectDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [html, setHTML] = useState({ __html: "" });
  const fetchProjectDetails = (id) => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/v1/core/projects/${id}/`,
    })
      .then((res) => {
        dispatch(setProjectDetails(res.data.data));
        setHTML({ __html: res.data.data.body });
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchProjectDetails(params.id);
  }, [params.id]);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex p-10">
          <IoArrowBack
            onClick={() => navigate(-1)}
            className="text-2xl font-bold text-purple-dark"
          />
        </div>
        <h1 className="flex-grow text-purple-dark text-3xl text-center xl:mb-6">
          {projectDetails && projectDetails.title}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center space-y-6">
        {projectDetails &&
          projectDetails.image_url && (
            <img
              className="w-full xl:w-6/12 h-full text-center"
              src={projectDetails.image_url}
              alt="Not Available"
            />
          )}
        {projectDetails && projectDetails.link && (
          <a
            href={projectDetails.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Out{" "}
            <span className="font-semibold text-center">
              {projectDetails && projectDetails.title}
            </span>
          </a>
        )}
        {projectDetails && (
          <div
            className="text-left font-normal text-gray-800 xl:text-xl"
            dangerouslySetInnerHTML={html}
          />
        )}
        {projectDetails && projectDetails.tags.length > 0 && (
          <div className="px-6 pt-4 pb-2">
            {projectDetails.tags.map((tag) => {
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
        )}
      </div>
    </>
  );
}

export default ProjectDetailPage;
