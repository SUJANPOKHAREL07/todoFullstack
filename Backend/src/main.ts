import express from "express";
import userRouter from "./router/userRouter";
import taskRouter from "./router/taskRouter";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/task", taskRouter);

app.listen(PORT, () => {
  console.log("You are on port number:", PORT);
});
