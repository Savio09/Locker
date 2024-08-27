import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTasks, getTasks } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

function TaskForm({ id, handleClose }) {
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    dispatch(getTasks(id));
  }, [id, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      toast.error("Please, add a task!");
      return;
    }
    const data = { task, id };
    dispatch(createTasks(data));
    handleClose();
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="task"
          name="task"
          value={task}
          placeholder="Please add your tasks here"
          onChange={onChange}
          style={{ outline: "none" }}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Create
      </button>
    </form>
  );
}

export default TaskForm;
