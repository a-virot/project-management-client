import { useState, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../context/theme.context";

const API_URL = "http://localhost:5005";

function AddProject(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {theme} =useContext(ThemeContext);

    const handleSubmit =(e)=>{
        e.preventDefault();

        const requestBody={title, description}

        axios
        .post(`${API_URL}/api/projects`,requestBody)
        .then((response)=>{
            setTitle("");
            setDescription("");

            props.refreshProjects(); // This way we are refreshing the list of projects and dynamically fetching data each time we create a new project using the form
        })
        .catch((error)=> console.log(error));
    };

    return(
        <div className={"AddProject "+ theme}>
            <h3>Add a Project</h3>

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
                    type="test"
                    name="description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
export default AddProject;