import { Link } from "react-router-dom";

// Ce compo sert à pésenter les noms de tous les projects sur la page de liste

//Deconstruction props object directly in the parentheses of the function
function ProjectCard({title, description, _id}){
    return(
        <div className="ProjectCard card">
            <Link to={`/projects/${_id}`}>
                <h3>{title}</h3>
            </Link>
            <p style={{maxWidth:"400px"}}>{description}</p>
        </div>
    )
}
export default ProjectCard;
// Link nous mène à ProjectDetailsPage : 
// un seul projet avec sa liste de plusieurs taches avec descriptions