import Hero from "../images/profile.png";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";

function Banner() {
  const userDetails = useSelector((state) => state.user.details);
  console.log("user", userDetails);
  return (
    <>
      {userDetails && (
        <div class="mt-10 flex flex-row justify-center">
        <div class="flex flex-col justify-center">
          <div
            class="flex self-center flex-col md:flex-row justify-center -ml-56 items-start space-x-0 md:space-x-14 "
          >
            <div class="rounded-full w-56">
              <img class="rounded-full mx-auto" src={Hero} alt="" />
            </div>
      
            <div class="w-2/5 mt-28">
              <p class="text-lg leading-10">
                <span class="font-bold text-xl">Hi, Iam ajmal</span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fugit porro perspiciatis voluptas,
                ab soluta veritatis laboriosam maiores alias maxime omnis aliquam provident hic corporis voluptatum
                et incidunt mollitia consequuntur. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit fugit porro perspiciatis voluptas, ab soluta veritatis laboriosam maiores alias maxime
                omnis aliquam provident hic corporis voluptatum et incidunt mollitia consequuntur. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Velit fugit porro perspiciatis voluptas, ab soluta
                veritatis laboriosam maiores alias maxime omnis aliquam provident hic corporis voluptatum et
                incidunt mollitia consequuntur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                fugit porro perspiciatis voluptas, ab soluta veritatis laboriosam maiores alias maxime omnis
                aliquam provident hic corporis voluptatum et incidunt mollitia consequuntur. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Velit fugit porro perspiciatis voluptas, ab soluta
                veritatis laboriosam maiores alias maxime omnis aliquam provident hic corporis voluptatum et
                incidunt mollitia consequuntur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                fugit porro perspiciatis voluptas, ab soluta veritatis laboriosam maiores alias maxime omnis
                aliquam provident hic corporis voluptatum et incidunt mollitia consequuntur. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Velit fugit porro perspiciatis voluptas, ab soluta
                veritatis laboriosam maiores alias maxime omnis aliquam provident hic corporis voluptatum et
                incidunt mollitia consequuntur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                fugit porro perspiciatis voluptas, ab soluta veritatis laboriosam maiores alias maxime omnis
                aliquam provident hic corporis voluptatum et incidunt mollitia consequuntur.
              </p>
            </div>
          </div>
      
          <div class="flex space-x-4 self-center text-md md:text-xl mt-8">
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
