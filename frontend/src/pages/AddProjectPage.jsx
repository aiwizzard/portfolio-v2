import axios from "axios";
import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// function AddProjectPage() {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
    
//     const titleChange = (e) => {
//         setTitle(e.target.value);}

//     const descriptionChange = (e) => {
//         setDescription(e.target.value)}
        
//     const addNewProject = (projectDetails) => {

//         axios({ url: "/api/v1/add-project/", method: "POST", data: projectDetails })
//             .then((res) => console.log(res))
//             .catch((err) => console.error(err));
//     }

//     return <>
//         <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
            
//         <form action="">
//         <h1 className="text-2xl font-bold text-gray-500 text-center my-4">
//         Add New Project
//         </h1>
//         <label for="textControl">Title</label>
//         <textarea
//     className="
//     form-control
//     block
//     w-full
//     px-4
//     py-3
//     text-base
//     font-normal
//     h-32
//     text-gray-700
//     bg-white bg-clip-padding
//     border border-solid border-green-300
//     rounded
//     transition
//     ease-in-out
//     m-0
//     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//     "
//     id="textControl"
//     rows="3"
//     onChange={titleChange}
//         ></textarea>

//         <label for="textControl">Title</label>
//         <textarea
//     className="
//     form-control
//     block
//     w-full
//     px-4
//     py-3
//     text-base
//     font-normal
//     h-32
//     text-gray-700
//     bg-white bg-clip-padding
//     border border-solid border-green-300
//     rounded
//     transition
//     ease-in-out
//     m-0
//     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//     "
//     id="textControl"
//     rows="3"
//     onChange={descriptionChange}
//         ></textarea>
//         <div className="mt-7 items-center">
//         <button
//     onClick={addNewProject}
//     className="bg-green-500 w-1/2 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
//         >
//         Add
//         </button>
//         </div>
//         </form>
//         </div>
//     </>;
// }


function AddProjectPage() {
    return (
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        </div>
    );
}

export default AddProjectPage;
