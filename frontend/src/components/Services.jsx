import { useSelector } from "react-redux";
import ServiceItem from "./ServiceItem";

function Services() {
    const services = useSelector((state) => state.user.details ? state.user.details["services"]: null);
    return (
        <>
        {services &&
            <div className="mb-10">
            <h3 className="text-3xl text-center text-gray-700 font-bold mb-10 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Services offered
            </h3>
            <div className="flex justify-center">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 md:w-8/12">
            {services.map((service) => {
                return <ServiceItem service={service} key={service.id} />
            })}
            </div>
            </div>
            </div>
        }
        </>
    );
}

export default Services;
