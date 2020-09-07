import express from "express";
import userController from "../controllers/userController.js";

const app = express();

app.post("/", userController.create);
app.get("/", userController.findAll);
app.get("/:id", userController.findOne);
app.put("/:id", userController.update);
app.delete("/:id", userController.remove);

export { app as userRouter };
