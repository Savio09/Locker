import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getProjectById } from "../features/projects/projectSlice";
import { Modal, Box } from "@mui/material";
import TaskForm from "../components/TaskForm";
import { deleteTask, getTasks } from "../features/tasks/taskSlice";

function Taskpage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { projects } = useSelector((state) => state.projects);
  let { tasks } = useSelector((state) => state.tasks);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(getTasks(id));
  };
  const specificProj =
    projects.length > 0
      ? projects.find((project) => project.id === id)
      : projects;

  useEffect(() => {
    dispatch(getProjectById(id));
    dispatch(getTasks(id));
  }, [dispatch, id]);

  const [checkedSupplies, setCheckedSupplies] = useState([]);

  const handleCheckboxChange = (projId, taskId) => {
    if (checkedSupplies.includes(taskId)) {
      setCheckedSupplies(
        checkedSupplies.filter((checkedId) => checkedId !== taskId)
      );
    } else {
      setCheckedSupplies([...checkedSupplies, taskId]);
      const data = { projId, taskId };
      console.log(data);
      dispatch(deleteTask(data)).then(() => {
        dispatch(getTasks(id));
      });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (tasks.length === 0) {
    tasks = specificProj.task;
  }

  return (
    <div className="specific-project">
      <div className="project-details project" style={location.state.color}>
        <div className="top-icons">
          <button onClick={handleBack} className="circle">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="circle">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
        <div className="pj-title">
          <h1 className="title">{specificProj.title}</h1>
          <p className="description">{specificProj.description}</p>
        </div>
        <div className="task-number">
          <span className="material-symbols-outlined">progress_activity</span>
          <div>
            {tasks && tasks.length !== 0 ? (
              <>
                <p>1/{tasks.length}</p>
                <p>task</p>
              </>
            ) : (
              <>
                <p>0/0</p>
                <p>task</p>
              </>
            )}
          </div>
        </div>
        <div className="mid-button">
          <button className="circle mid" onClick={handleOpen}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
      <div className="tasks">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <TodoItem
              key={task.id}
              supplyId={task.id}
              checked={checkedSupplies.includes(task.id)}
              onCheckboxChange={handleCheckboxChange}
              task={task}
              projId={task.taskId}
            />
          ))
        ) : (
          <h3>No Tasks for this project</h3>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TaskForm id={id} handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "500px",
  height: "300px",
  transform: "translate(-50%, -50%)",
  backgroundImage:
    "radial-gradient(hsla(0, 100%, 95%, 0.067) 1px, #10101a88 0)",
  backdropFilter: "blur(10px)",
  backgroundSize: "4px 4px",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "10px",
};
export default Taskpage;
