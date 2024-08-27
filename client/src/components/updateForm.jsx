import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProject,
  getProjectById,
} from "../features/projects/projectSlice";
import { useNavigate, useParams } from "react-router-dom";

function UpdateForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projects } = useSelector((state) => state.projects);

  const specificProj =
    projects.length > 0
      ? projects.find((project) => project.id === id)
      : projects;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getProjectById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (specificProj) {
      setFormData({
        title: specificProj.title || "",
        description: specificProj.description || "",
      });
    }
  }, [specificProj]);

  const { title, description } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { id, title, description };
    dispatch(updateProject(data));
    navigate("/");
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

export default UpdateForm;
