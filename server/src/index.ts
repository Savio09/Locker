import * as dotenv from "dotenv";
dotenv.config();
import app from "./server";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
