import { error } from "console";
import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res, next) => {
  try {
    const isExisting = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    if (isExisting) {
      res.status(400).json({
        message: "Username already taken",
      });
      return;
    }
    const user = await prisma.user.create({
      data: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
    });

    const token = createJWT(user);
    res.json({
      token,
    });
  } catch (err) {
    if (err.code === "P2002" && err.meta.target.includes("username")) {
      // Prisma unique constraint violation
      return res.status(400).json({ error: "Username is already taken" });
    }
    err.type = "input";
    next(err);
  }
};

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  // Now that we looked through the database for the name,
  //we have to compare the hashPassword that this person types with
  // the signed password
  const match = await comparePasswords(req.body.password, user.password);
  if (!match) {
    res.status(401).json({
      message: "Invalid password or username",
    });
    return;
  }
  const token = createJWT(user);
  res.json({
    id: user.id,
    username: user.username,
    lastname: user.lastname,
    firstname: user.firstname,
    token,
  });
};
