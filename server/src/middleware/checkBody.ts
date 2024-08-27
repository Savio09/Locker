import { body } from "express-validator";

export const projValidator = [
  body("title").isString(),
  body("description").optional(),
];

export const taskValidator = [body("task").isString()];

export const signUpValidator = [
  body("username").exists().isString(),
  body("firstname").exists().isString(),
  body("lastname").exists().isString(),
  body("password").exists().isString(),
];

export const loginValidator = [
  body("username").exists().isString(),
  body("password").exists().isString(),
];
