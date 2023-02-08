import { MdKeyboardArrowDown, MdSettings } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function TopNavBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-2 bg-white mb-4 mt-4">
        <div className="container px-4 mx-auto flex flex-row flex-wrap items-center justify-between md:w-4/6">
          <div className="w-full relative flex justify-between ">
            <button
              className="nav-item px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-700 hover:opacity-80 hover:underline"
              onClick={() => navigate("/")}
            >
              Ajmal
            </button>
          <div className="nav-item">
            <button
              className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-700 hover:opacity-80 hover:underline"
              onClick={() => navigate("/projects")}
              >
              Projects
            </button>
                    </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNavBar;
