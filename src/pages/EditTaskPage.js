import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link} from "react-router-dom";
import { ThemeContext } from "../context/theme.context";

const API_URL = "http://localhost:5005";

function EditTaskPage(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription]=useState("");
    const [projectId, setProjectId]=useState("");
    const {theme} = useContext(ThemeContext);
    // const [project, setProject]= useState("");
    
    const {taskId} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
      axios
      .get(`${API_URL}/api/tasks/${taskId}`)
      .then((response)=>{
        const theTask = response.data;
        setTitle(theTask.title);
        setDescription(theTask.description);
        setProjectId(theTask.project)
      })
      .catch((error)=> console.log(error))
    },[taskId])

  

  //   const getProject = ()=> {
  //     axios
  //     .get(`${API_URL}/api/projects/${projectId}`)
  //     .then((response)=>{
  //         const oneProject = response.data
  //         setProject(oneProject);
  //     })
  //     .catch((error)=> console.log(error));
  // };

    const handleFormSubmit= (e)=>{
        e.preventDefault();
          // An object to represent the body of the PUT request with states
        const requestBody = {title, description};

        axios
        .put(`${API_URL}/api/tasks/${taskId}`, requestBody)
        .then((response)=>{
            navigate(`/projects/${projectId}`);
        });
    };

    // TODO recup project id,
    // Propriétés anciennes de tasks pour les afficher 

    const deleteTask=()=>{
      axios
      .delete(`${API_URL}/api/tasks/${taskId}`)
      .then(()=>{
        navigate(`/projects/${projectId}`)
      })
      .catch((error)=> console.log(error))
    }


  return (
    <div className={"AddTask "+ theme}>
    <h3>Edit the Task</h3>
    {/* <h2>{project.title}</h2> */}

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
            onChange={(e)=> setDescription(e.target.value)}
        />

        <button type="submit">Update Task</button>
    </form>

    <button onClick={deleteTask}>Delete Task</button>
    <Link to={`/projects/${projectId}`}>
      <button>Back to project</button>
    </Link>


    </div>
  )
}

export default EditTaskPage