import { activityModel } from "../models/activityModels.js";

const create = async (req, res) => {
  const title = req.body.title;
  const type = req.body.type;
  const teacher = req.body.teacher;
  const score = req.body.score;
  const time = req.body.time;
  const image = req.body.image;
  const levelRequired = req.body.levelRequired;

  try {
    const newLevel = await activityModel.insertMany({
      title: title,
      type: type,
      teacher: teacher,
      score: score,
      time: time,
      image: image,
      levelRequired: levelRequired,
    });
    res.send(newLevel);
  } catch (error) {
    res.status(500).send({ message: error.message || "Inexpected error!" });
  }
};

const findAll = async (_req, res) => {
  try {
    const allLevels = await activityModel.find({});

    res.send(allLevels);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Error to find all documents" });
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const level = await activityModel.findById(id);
    res.send(level);
  } catch (error) {
    res.status(500).send({ message: "Could not find level id: " + id });
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data can not be empty",
    });
  }

  const id = req.params.id;
  const title = req.body.title;
  const type = req.body.type;
  const teacher = req.body.teacher;
  const score = req.body.score;
  const time = req.body.time;
  const image = req.body.image;
  const levelRequired = req.body.levelRequired;

  try {
    await activityModel.findByIdAndUpdate(id, {
      title: title,
      type: type,
      teacher: teacher,
      score: score,
      time: time,
      image: image,
      levelRequired: levelRequired,
    });
    res.send({ message: "Level updated!" });
  } catch (error) {
    res.status(500).send({ message: "Could not update level id: " + id });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await activityModel.findByIdAndRemove(id);
    res.send({ message: "Level successful removed" });
  } catch (error) {
    res.status(500).send({ message: "Could not remove level id: " + id });
  }
};

export default { create, findAll, findOne, update, remove };
