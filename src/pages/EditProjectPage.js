import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";

const API_URL = "http://localhost:5005";

function EditProjectPage(){
    const [title, setTitle]= useState("");
    const [description, setDescription]= useState("");
     // To get the URL parameter `:projectId` 
    const {projectId} = useParams();
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);
 // useEffect runs after initial render and each time project's id
 // `projectId`, coming from URL parameter, changes

 useEffect(()=>{
    axios
    .get(`${API_URL}/api/projects/${projectId}`)
    .then((response)=>{
        const theProject = response.data;
        setTitle(theProject.title);
        setDescription(theProject.description);
    })
    .catch((err)=>console.log(err));
 },[projectId])

 const handleFormSubmit = (e)=>{
    e.preventDefault();
     // An object representing the body of the PUT request with states
     const requestBody = { title, description };

     axios
     .put(`${API_URL}/api/projects/${projectId}`, requestBody)
     .then((response)=>{
       navigate(`/projects/${projectId}`) // back to the details page
     });
 };

 const deleteProject = ()=>{
    axios
    .delete(`${API_URL}/api/projects/${projectId}`)
    .then(()=>{
        navigate("/projects");
    })
    .catch((err)=>console.log(err));
 };
 
    return(
        <div className={"EditProjectPage "+ theme}>
            <h3>Edit the Project</h3>

            <form onSubmit={handleFormSubmit}>
                <label>Title :</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />

                <label>Description :</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />

                <button type="submit">Update Project</button>
            </form>

            <button onClick={deleteProject}>Delete Project</button>

        </div>
    )


}
export default EditProjectPage;