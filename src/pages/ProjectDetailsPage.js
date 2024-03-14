import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

const API_URL = "http://localhost:5005";

function ProjectDetailsPage(){
    const [project, setProject] = useState(null);
    const {projectId} = useParams(); // Get the URL parameter `:projectId` cf Route

     // Helper function that makes a GET request to the API with projectID 
    // from params and retrieves the project by id
    const getProject = ()=> {
        axios
        .get(`${API_URL}/api/projects/${projectId}`)
        .then((response)=>{
            const oneProject = response.data
            setProject(oneProject);
        })
        .catch((error)=> console.log(error));
    };

    useEffect(()=>{
        getProject();
        // the following comment avoid the error : "useEffect has a missing dependency. Either include it or remove the dependency array"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="ProjectDetails">

            {project && (
                <>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </>
            )}

            {project && project.tasks.map((task)=>(
                <TaskCard key={task._id} {...task} projectTitle={project.title}/>
            ))}
            
            {/* 
            {project && 
                project.tasks.map((task)=>(
                    <li className="TaskCard card" key={task._id}>
                        <h3>{task.title}</h3>
                        <h4>Description:</h4>
                         <p>{task.description}</p>
                    </li>
                ))
            } */}
            <AddTask refreshProject={getProject} projectId={projectId}/>

            <Link to="/projects">
                <button>Back to projects</button>
            </Link>

            <Link to={`/projects/edit/${projectId}`}>
                <button>Edit Project</button>
            </Link>
        </div>
    )
}
export default ProjectDetailsPage;