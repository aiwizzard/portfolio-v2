import { FaPen } from "react-icons/fa";

function ServiceItem({service}) {
  return (
    <div className="flex justify-center items-center space-x-6 p-6 border-gray-200 border-2 rounded-xl text-center h-52">
      {/* <FaPen className="text-5xl text-violet-500"/> */}

      <div className="flex flex-col space-y-4 text-left">
        <h1 className="text-2xl font-semibold text-gray-700">{service.title}</h1>
        <p className="text-gray-400">
          {service.body}
        </p>
      </div>
    </div>
  );
}

export default ServiceItem;
