// We are deconstructing the props object directly in the parentheses of the function
import { Link } from "react-router-dom";
function TaskCard({title, description, _id, projectTitle }){
    return(
        <div className="TaskCard card">
        
        <h3>{title}</h3>
        <h4>Description : </h4>
        <p>{description}</p>
        {/* <h4>Projet parent: </h4>
        <p>{projectTitle}</p> */}

        <Link to={`/task/edit/${_id}`} >
            <button>Edit Task</button>
        </Link>


        </div>
    )
}

export default TaskCard; 