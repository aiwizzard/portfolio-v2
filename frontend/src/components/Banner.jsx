import Hero from "../images/profile.png";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";

function Banner() {
  const userDetails = useSelector((state) => state.user.details);
  console.log("user", userDetails);
  return (
    <>
      {userDetails && (
        <div className="mt-10 flex flex-row justify-center">
          <div className="flex flex-col justify-center">
            <div className="flex self-center flex-col md:flex-row justify-center -ml-56 items-start space-x-0 md:space-x-14 ">
              <div className="rounded-full w-56">
                <img className="rounded-full mx-auto" src={Hero} alt="" />
              </div>

              <div className="w-1/3 font-poppins mt-28 text-lg leading-8 flex flex-col space-y-6">
                <p className="font-bold text-xl">
                  Hi, I am Ajmal, a senior software developer with 4+ years of
                  experience.
                </p>
                <p>
                  I will say my specialty is Python since it is the main part of
                  most of my projects. I am most curious about engineering
                  systems, and machine learning specifically and actively doing
                  side projects. Also take part in the end-to-end project
                  pipeline, from planning to deploying to the mass. I Build
                  full-stack applications with Django, Django Rest Framework,
                  and react.
                </p>
                <p className="">
                  If I am being specific about my experience, I will say it is 4
                  years and 6 months. For the first 13 months, I was a freelance
                  developer. It was in the final year of my bachelor's degree. I
                  started by building small websites for friends’ relatives.
                  during this period I became experienced in Python and Django.
                </p>
                <p>
                  Then after that college I joined a startup as software
                  developer. I was there for 2 years and 2 months. Here my work
                  included Python, Django, Django Rest Framework, Flutter,
                  Machine Learning with PyTorch and deployment of back-end
                  services.
                </p>
                <p>
                  After that, I joined{" "}
                  <a
                    className="font-medium text-blue-600 no-underline dark:text-blue-500 hover:underline"
                    href="https://maverixpro.com/"
                  >
                    MaverixPRO Ltd
                  </a>{" "}
                  - a public limited company - as a Senior Software Developer
                  and remained there for 1 year and 3 months. My role was as a
                  Team Lead for back-end developers. During this tenure, I
                  mentored them, analyzed their work, and gave feedback. We
                  build lots of application back-ends with Django and Django
                  Rest Framework. Tinc was the main app. It is a platform for
                  Indian stock market traders which provided courses, gave the
                  news, view market data, and can trade. I was also Tasked with
                  deploying code to the server. For the lion's share of the
                  projects, I deployed them with Docker and docker-compose. For
                  some application that requires handling more load, I opt for
                  infrastructure as code (IAC), specifically Terraform on AWS.
                </p>

                <p>
                  The best way to contact me is via email at{" "}
                  <a
                    className="font-medium text-blue-600 no-underline dark:text-blue-500 hover:underline"
                    href="mailto:ajmal@ajmalk.com"
                  >
                    ajmal@ajmalk.com
                  </a>
                  .
                </p>
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
