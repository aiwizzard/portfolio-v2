import heroImg from "../images/hero2.png";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";

function Banner() {
  const userDetails = useSelector((state) => state.user.details);
  console.log("user", userDetails);
  return (
    <>
      {userDetails && (
        <div className="h-screen flex flex-col justify-center">
          <div className="flex self-center flex-col md:flex-row justify-center items-center space-x-0 md:space-x-14 space-y-12">
            <div className="rounded-full w-56 bg-gradient-to-r p-[5px] from-indigo-500 via-purple-500 to-pink-500">
              <img
                className="rounded-full mx-auto"
                src={userDetails["image_url"]}
                alt=""
              />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-semibold w-11/12 text-gray-700 lg:w-2/3">
              Hello, My name is&nbsp;
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                ajmal
              </span>
              &nbsp;i love coding and i do awesome projects.
            </h1>
          </div>

          <div className="flex space-x-4 self-center text-md md:text-xl mt-8">
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
      )}
    </>
  );
}

export default Banner;
