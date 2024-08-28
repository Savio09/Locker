import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../features/projects/projectSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Projectform() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: "",
    title: "",
  });
  const { title, description } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      toast.error("Provide a project name");
      return;
    }
    const data = { title, description };
    dispatch(createProject(data));
    navigate("/dashboard");
  };
  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={title}
              placeholder="Enter your project name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={description}
              placeholder="Enter your project description"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Projectform;
