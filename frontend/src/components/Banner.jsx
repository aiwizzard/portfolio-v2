import Hero from "../images/profile.png";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function Banner() {
  const userDetails = useSelector((state) => state.user.details);
  const [html, setHTML] = useState({__html: ""});
  useEffect (()=> {
    setHTML({__html: userDetails.bio})
  },[])
  return (
    <>
      {userDetails && (
        <div className="mt-10 flex flex-row justify-center">
          <div className="flex flex-col justify-center px-6">
            <div className="flex self-center flex-col md:flex-row justify-center md:-ml-56 md:p-6 items-center md:items-start space-x-0 md:space-x-14 ">
              <div className="rounded-full w-56 hidden md:flex">
                <img className="rounded-full mx-auto" src={userDetails["image_url"]} alt="" />
              </div>

              {userDetails && ( <div className="md:w-1/3 font-poppins md:mt-2 text-lg leading-8 flex flex-col space-y-6" dangerouslySetInnerHTML={html}>
                
              </div>)}
              <div className="rounded-full w-56 md:hidden m-10">
                <img className="rounded-full mx-auto" src={userDetails["image_url"]} alt="" />
              </div>
            </div>

            <div className="flex space-x-4 self-center text-md md:text-xl mt-8 mb-20">
              <a href="https://github.com/aiwizzard">
                <FaGithub />
              </a>
              <a href="https://twitter.com/AjmalKoroth">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/ajmalkoroth/">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/ajmalbinnoufal/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
