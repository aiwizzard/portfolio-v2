import axios from "axios";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const submitContactForm = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      contact: contact,
      message: message,
    };
    axios({
      method: "post",
      url: "https://ajmalk.com/api/v1/core/submit_contact/",
      data: data,
    })
      .then((res) => {
        console.log(res);
        setName("");
        setContact("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mx-auto container flex items-center mt-6">
      <div className="w-full pt-2 p-4">
        <div className="mx-auto md:p-6 md:w-1/2">
          <div className="">
            <h3 className="text-3xl text-center text-gray-700 font-bold mb-6 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Contact
            </h3>
          </div>

          <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form method="POST" action="#login">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {/* <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> */}
                  </div>
                  <input
                    id="name"
                    value={name}
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block pr-10 shadow appearance-none border-2 border-violet-100 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-violet-500 transition duration-500 ease-in-out"
                  />
                </div>
                {/* <strong className="text-red-500 text-xs italic">username is require</strong> */}
              </div>

              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  contact
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {/* <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> */}
                  </div>
                  <input
                    id="email"
                    value={contact}
                    defaultValue={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="block pr-10 shadow appearance-none border-2 border-violet-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-violet-500 transition duration-500 ease-in-out"
                  />
                </div>
                {/* <strong className="text-red-500 text-xs italic">username is require</strong> */}
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  message
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {/* <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg> */}
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    type="text"
                    value={message}
                    defaultValue={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block h-32 pr-10 shadow appearance-none border-2 border-violet-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-violet-500 transition duration-500 ease-in-out"
                  />
                </div>
              </div>

              <div className="mb-4 text-center">
                <button
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  onClick={submitContactForm}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
