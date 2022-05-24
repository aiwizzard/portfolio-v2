import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import {useDispatch} from "react-redux";

import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import { setUserDetails } from "./redux/userActions";


function App() {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const fetchData = () => {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/v1/core/home/"
    })
    .then((res) => {
      dispatch(setUserDetails(res.data.data));
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  useEffect(() => {
    fetchData();
  },[])
  // console.log("userData profile image", userData["image_url"]);
  // console.log("userData", userData);
  return (
    <>{userData && 
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
      }
    </>
  );
}

export default App;
