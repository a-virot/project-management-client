import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddTask(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        const {projectId, refreshProject} = props;
        // An object representing the body of the POST request
        const newTaskRequestBody = {title, description, projectId};
        
        axios
        .post(`${API_URL}/api/tasks`, newTaskRequestBody)
        .then((response)=>{
            setTitle("");
            setDescription("");

        // Callback function from props of ProjectDetailsPage
        // to refresh the project details
       refreshProject();
        })
        .catch((err)=> console.log(err));
    };


    return(

        <div className="AddTask">
            <h3>Add New Task</h3>
            <form onSubmit={handleSubmit}>
                <label>Title :</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Description : </label>
                <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                />

                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}
export default AddTask;