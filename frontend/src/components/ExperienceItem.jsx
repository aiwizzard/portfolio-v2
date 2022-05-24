import Experience from "./Experience";

function ExperienceItem({experience}) {
  return (
    <>
      <li>
        <div className="md:flex flex-start">
          <div className="bg-violet-500 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="text-white w-3 h-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
          </div>
          <div className="block p-6 rounded-lg w-full max-w-3xl border-2 border-gray-100 ml-6 mb-10">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">
                {experience.designation}
              </h1>
              {experience.start} - {experience.end}
            </div>
            <p className="font-regular text-gray-800 text-lg mb-2">
              {experience.company}
            </p>
            <ul className="text-gray-700 mb-6 list-outside list-disc">
              {experience["duties"].map((item) => {
                return <li key={item.id}>{item.name}</li>
              })}
              {/* <li>Design application architecture.</li>
              <li>Design data schema.</li>
              <li>Decide which tech stack to use in the product.</li>
              <li>
                Lead a team of python developers in developing application
                backend.
              </li>
              <li>Develop application back-end with Django rest framework.</li>
              <li>
                Develop chat applications with django channels including private
                chat.
              </li>
              <li>Develop application front-end with react.</li>
              <li>
                Research about new technologies and implement them in ongoing
                projects.
              </li>
              <li>
                Deploy Django rest applications with docker, nginx, postgres,
                redis and docker compose.
              </li> */}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}

export default ExperienceItem;
