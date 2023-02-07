import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setUserDetails } from "../redux/userActions";
import Projects from "../components/Projects";
import TopNavBar from "../components/TopNavbar";

function ProjectsPage() {
  const userDetails = useSelector((state) => state.user.details);

  const dispatch = useDispatch();
  const fetchData = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/v1/core/home/`,
    })
      .then((res) => {
        dispatch(setUserDetails(res.data.data));
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (!userDetails) {
      fetchData();
    }
  }, []);
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
