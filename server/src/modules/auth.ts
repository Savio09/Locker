import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = async (password) => await bcrypt.hash(password, 5);
export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401).json({
      message: "Unauthorized access",
    });
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401).json({
      message: "You don't have a token. YOu are unauthorized!",
    });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user; // Because this protect middleware was signed
    //before the routes that were registered, all the routes can access the
    //user object containing the id and username from req.user.
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      message: "Not authorized!",
    });
  }
};
