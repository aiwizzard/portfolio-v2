import { useSelector } from "react-redux";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  const experiences = useSelector((state) => state.user.details ? state.user.details["experiences"]: null);
    return (
      <>
      {experiences && 
        <div className="flex p-6 md:p-10 justify-center items-center">
        <div>
          <h3 className="text-3xl text-center text-gray-700 font-bold mb-10 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Experience
          </h3>

          <ol className="border-l-2 border-purple-500">
            {experiences.map((experience) => {
              return <ExperienceItem experience={experience} key={experience.id}/>
            })}
            
            
          </ol>
          <ol className="border-l border-gray-300">
           
          </ol>
        </div>
      </div>
          }
            </>
    );
}

export default Experience;