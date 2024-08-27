import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";
import { loginValidator, signUpValidator } from "./middleware/checkBody";
import { handleInputErrors } from "./middleware/handleInputErrors";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  console.log("hello world");
  res.status(200).json({
    message: "This is the reality of life now then",
  });
});

app.use("/api", protect, router);
app.post("/user/signup", signUpValidator, handleInputErrors, createNewUser);
app.post("/user/signin", loginValidator, handleInputErrors, signin);

export default app;
