import React from "react"
import brushImg from "../assets/brush-line.png"
import Project from "./Project"
import { Link } from "gatsby"

const ProjectSection = ({ projects, showLink }) => {
  return (
    <div className="project-section container pt-5">
      {showLink ? (
        <div className="title text-center">
          <h2>プロジェクト</h2>
          <div className="img mt-3 mb-2">
            <img src={brushImg} className="img-fluid" alt="brush line" />
          </div>
          <h2>Project</h2>
        </div>
      ) : (
        ""
      )}
      {projects.map((project, index) => {
        return <Project key={project.id} index={index} {...project} />
      })}
      {showLink ? (
        <div className="text-center mt-3 mb-5">
          <Link to="/projects/" className="btn btn-primary">
            see more
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default ProjectSection
