import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../components/Banner";
import { useEffect } from "react";
import { setUserDetails } from "../redux/userActions";
import TopNavBar from "../components/TopNavbar";

function HomePage() {
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
    fetchData();
  }, []);

  return (
    <>
      {userDetails && (
        <div className="bg-white">
          <TopNavBar />
          <Banner />
        </div>
      )}
    </>
  );
}

export default HomePage;
