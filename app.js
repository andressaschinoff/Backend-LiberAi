import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { userRouter } from "./routes/userRouter.js";
import { levelRouter } from "./routes/levelRouter.js";
import { activityRouter } from "./routes/activityRouter.js";
import { db } from "./models/index.js";

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.log(`Error in db connection! ${error}`);

    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: 'https://grades-app-schinoff.herokuapp.com',
  })
);

app.use("/users", userRouter);
app.use("/levels", levelRouter);
app.use("/activities", activityRouter);

app.get("/", (req, res) => {
  res.send("API em execucao");
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started in port ${process.env.PORT}`);
});
