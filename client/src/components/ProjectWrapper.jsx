import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProject } from "../features/projects/projectSlice";
import { getTasks } from "../features/tasks/taskSlice";

function ProjectWrapper({ project, color }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleEditClick = () => {
    setIsOpen(!isOpen);
    navigate(`/update/${project.id}`);
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleDeleteClick = () => {
    setIsOpen(!isOpen);
    dispatch(deleteProject(project.id));
  };

  const handleAddTask = () => {
    navigate(`/add_task/${project.id}`, { state: { color } });
    dispatch(getTasks(project.id));
  };

  return (
    <div className="project" style={color} onClick={closeMenu}>
      <div className="pj-title">
        <h1 className="title">{project.title}</h1>
        {/* <p className="description">{project.description}</p> */}
      </div>
      <div className="task-number">
        <span className="material-symbols-outlined">progress_activity</span>
        <div>
          {project.task?.length > 0 ? (
            <>
              <p>{project.task.length}</p>
            </>
          ) : (
            <p>0</p>
          )}
          <p>task{project.task?.length > 1 ? "s" : ""}</p>
        </div>
      </div>
      <div className="bottom-icons">
        <div className="dropdown">
          <button className="circle" onClick={openMenu}>
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <button onClick={handleEditClick}>
                <span className="material-symbols-outlined">edit</span>Edit
                Project
              </button>
              <button onClick={handleDeleteClick}>
                <span className="material-symbols-outlined">delete</span> Delete
                Project
              </button>
            </div>
          )}
        </div>

        <button className="circle" onClick={handleAddTask}>
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  );
}

export default ProjectWrapper;
