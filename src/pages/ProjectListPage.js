import { useState, useEffect, useContext  } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import AddProject from "./AddProject";
import ProjectCard from "../components/ProjectCard";
import { ThemeContext } from "../context/theme.context";

const API_URL="http://localhost:5005";  // We capitalized the name of the variable to signal that this value is a constant and will remain unchanged 

function ProjectListPage(){
    const [projects, setProjects] = useState([]);
    const {theme} = useContext(ThemeContext);

    // SERVER SIDE : project.routes.js (prefixed with /api in app.js): http://localhost:5005/api/projects
    // router.get("/projects", (req, res, next) => { Project.find()
    const getAllProjects=()=>{
        axios
        .get(`${API_URL}/api/projects`)
        .then((response)=>setProjects(response.data))
        .catch((error)=> console.log(error));
    }

    useEffect(()=>{
        getAllProjects();
    }, []);

    return(
        <div className={"ProjectListPage "+ theme} >

        <AddProject refreshProjects={getAllProjects}/>

        <h2>Liste de Projets</h2>

        {projects.map((project)=>(
            <ProjectCard key={project._id} {...project}/>
        ))}

        {/*  Présentation projet, sans tasks, objet sans profondeur
        Avant : 
        {projects.map((project)=>{
            return(
                <div key={project._id}  className="ProjectCard card">
                    <Link to={`/projects/${project._id}`}>
                        <h3>{project.title}</h3>
                    </Link>
                </div>
            )
        })} */}

        </div>
    )
}
export default ProjectListPage;