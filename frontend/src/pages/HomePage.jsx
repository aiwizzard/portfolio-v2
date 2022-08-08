import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../components/Banner";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";
import { setUserDetails } from "../redux/userActions";

function HomePage() {
  const userDetails = useSelector((state) => state.user.details);
  const dispatch = useDispatch();
  const fetchData = () => {
    axios({
      method: "get",
      url: "https://ajmalk.com/api/v1/core/home/",
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
          <Banner />
          <div className="border-b border-purple-500 mx-10 my-10" />
          <Experience />
          <div className="border-b border-purple-500 mx-10 my-10" />
          <Services />
          <div className="border-b border-purple-500 mx-10 my-10" />
          <Projects />
          <div className="border-b border-purple-500 mx-10 my-10" />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default HomePage;