import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./middleware/handleInputErrors";
import { projValidator, taskValidator } from "./middleware/checkBody";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getOneProject,
  updateProject,
} from "./handlers/project";
import { createTask, deleteTask, getAllTasks } from "./handlers/task";

// The routes that would be created here all need authentication before they can be accessed
const router = Router();

// This is the router for the projects

// This should get all the projects and display them on the homepage
router.get("/projects", getAllProjects);

router.get("/projects/:id", getOneProject); // When a project is clicked this should open that specific project
router.post("/projects", projValidator, handleInputErrors, createProject); // This is to create projects
router.put("/projects/:id", projValidator, handleInputErrors, updateProject); // This is to edit the projects that were created
router.delete("/projects/:id", deleteProject); // This is to delete the created project.

// This is the router for the tasks for the projects created
// For all the tasks belonging to a project
router.get("/tasks/:id", getAllTasks);
router.post("/tasks/:id", taskValidator, handleInputErrors, createTask); // Create a new task
router.put("/tasks/:id", taskValidator, handleInputErrors, (req, res) => {}); // Update/ re-edit a task
router.delete("/tasks/:proj/:id", deleteTask); // delete a specific task

export default router;
