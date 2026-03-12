import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";
import "../styles/project.css";

function Projects() {

  const navigate = useNavigate();

  return (
    <div>

        <div className="container">

<h2 className="projects-title">Projects</h2>

<div className="project-grid">

{projects.map((project)=>(
  <div className="project-card" key={project.id}>

    <h3>{project.name}</h3>

    <span className={`status ${project.status.toLowerCase()}`}>
      {project.status}
    </span>

    <p>Start Date: {project.startDate}</p>
    <p>Location: {project.location}</p>

    <button
      className="project-btn"
      onClick={()=>navigate(`/dpr/${project.id}`)}
    >
      Open DPR
    </button>

  </div>
))}

</div>

</div>

    </div>
  );
}

export default Projects;