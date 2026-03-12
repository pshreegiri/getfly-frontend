import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import "../styles/dpr.css";

function DPRForm() {

  const navigate = useNavigate();

  const [projectId, setProjectId] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [description, setDescription] = useState("");
  const [workers, setWorkers] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {

    const files = Array.from(e.target.files);

    if(files.length > 3){
      alert("Maximum 3 images allowed");
      return;
    }

    setImages(files);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!projectId || !date || !weather || !description || !workers){
      alert("Please fill all fields");
      return;
    }

    alert("DPR Submitted Successfully");

    navigate("/projects");
  };

  return (

    <div className="container">
      <div className="form-card">

        <h2>Daily Progress Report</h2>

        <form onSubmit={handleSubmit}>

          

          <div className="form-group">

            <label>Select Project</label>

            <select
              value={projectId}
              onChange={(e)=>setProjectId(e.target.value)}
            >

              <option value="">Select Project</option>

              {projects.map((project)=>(
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}

            </select>

          </div>

          

          <div className="form-group">

            <label>Date</label>

            <input
              type="date"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
            />

          </div>

          

          <div className="form-group">

            <label>Weather</label>

            <select
              value={weather}
              onChange={(e)=>setWeather(e.target.value)}
            >

              <option value="">Select Weather</option>
              <option>Sunny</option>
              <option>Cloudy</option>
              <option>Rainy</option>

            </select>

          </div>

          

          <div className="form-group">

            <label>Work Description</label>

            <textarea
              placeholder="Describe the work done today"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />

          </div>

          

          <div className="form-group">

            <label>Worker Count</label>

            <input
              type="number"
              placeholder="Enter number of workers"
              value={workers}
              onChange={(e)=>setWorkers(e.target.value)}
            />

          </div>

          {/* Image Upload */}

          <div className="form-group">

            <label>Upload Photos (Max 3)</label>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />

          </div>

          {/* Image Preview */}

          {images.length > 0 && (

            <div className="preview-container">

              {images.map((img,index)=>(
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="preview-img"
                />
              ))}

            </div>

          )}

          

          <div className="form-actions">

            <button
              type="button"
              className="back-btn"
              onClick={()=>navigate("/projects")}
            >
              Back
            </button>

            <button
              type="submit"
              className="submit-btn"
            >
              Submit DPR
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default DPRForm;