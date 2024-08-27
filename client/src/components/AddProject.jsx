import React, { useEffect } from "react";
import ProjectTiles from "./ProjectTiles";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../features/projects/projectSlice";
import Projectform from "./Projectform";

function AddProject() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  const { projects } = useSelector((state) => state.projects);
  return (
    <div className="tiles">
      <h1>New Task</h1>
      <div className="time-icons">
        <div className="time">
          <span className="select">Today</span>
          <span className="select">Tomorrow</span>
        </div>
        <div className="icons">
          <span className="timer"></span>
          <span className="notification"></span>
        </div>
      </div>
      <div className="projects">
        {projects && projects.length > 0 ? (
          <div>
            {projects.map((project) => (
              <ProjectTiles title={project.title} key={project.id} />
            ))}
          </div>
        ) : (
          <h3>No project</h3>
        )}
      </div>
      <div className="title">
        <h3>TITLE</h3>
        <Projectform />
      </div>
    </div>
  );
}

export default AddProject;
