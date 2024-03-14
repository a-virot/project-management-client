import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function EditTaskPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription]=useState("");
    
    const {taskId} = useParams();
    const navigate = useNavigate();


    const handleFormSubmit= (e)=>{
        e.prevent.Default();
          // An object representing the body of the PUT request with states
        const requestBody = {title, description};

        axios
        .put(`${API_URL}/api}`, requestBody)
        .then((response)=>{
            // navigate(`/project/${projectId}`)
            navigate(`/projects`);
        });
    };

    // TODO recup project id 


  return (
    <div className="EditTaskPage">
    <h3>Edit the Task</h3>

    <form onSubmit={handleFormSubmit}>
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
            onChange={(e)=> setDescription}
        />

        <button type="submit">Update Task</button>
    </form>

    <button oncClick={deleteTask}>Delete Task</button>


    </div>
  )
}

export default EditTaskPage