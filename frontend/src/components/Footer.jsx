import { MdLocationPin, MdEmail, MdLocalPhone } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="bg-vie-black min-h-40 flex flex-col justify-center items-center pt-10">
        <div className="flex space-x-6 py-2">
          <MdLocationPin className="text-white text-2xl" />
          <p className="text-white text-left w-56">
            Hilite Business Park, Palazhi, Calicut, 673014
          </p>
        </div>
        <div className="flex space-x-6 py-2">
          <MdEmail className="text-white text-2xl" />
          <p className="text-white text-left w-56">ajmalkdeveloper@gmail.com</p>
        </div>
        <div className="flex space-x-6 py-2">
          <MdLocalPhone className="text-white text-2xl" />
          <p className="text-white text-left w-56">+91 9544 797 225</p>
        </div>
      <p className="text-gray-500 text-md pt-4 pr-4 w-full text-right">© 2022, Ajmal K</p>
      </div>
    </>
  );
}

export default Footer;
