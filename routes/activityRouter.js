import express from "express";
import activityController from "../controllers/activityController.js";

const app = express();

app.post("/", activityController.create);
app.get("/", activityController.findAll);
app.get("/:id", activityController.findOne);
app.put("/:id", activityController.update);
app.delete("/:id", activityController.remove);

export { app as activityRouter };
