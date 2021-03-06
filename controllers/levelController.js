import { levelModel } from "../models/levelModels.js";

const create = async (req, res) => {
  const title = req.body.title;
  const mandatoryActivities = req.body.mandatoryActivities;
  const bankPrize = req.body.bankPrize;

  try {
    const newLevel = await levelModel.insertMany({
      title: title,
      mandatoryActivities: mandatoryActivities,
      bankPrize: bankPrize,
    });
    res.send(newLevel);
  } catch (error) {
    res.status(500).send({ message: error.message || "Inexpected error!" });
  }
};

const findAll = async (_req, res) => {
  try {
    const allLevels = await levelModel.find({});

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
    const level = await levelModel.findById(id);
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
  const mandatoryActivities = req.body.mandatoryActivities;
  const bankPrize = req.body.bankPrize;

  try {
    await levelModel.findByIdAndUpdate(id, {
      title: title,
      mandatoryActivities: mandatoryActivities,
      bankPrize: bankPrize,
    });
    res.send({ message: "Level updated!" });
  } catch (error) {
    res.status(500).send({ message: "Could not update level id: " + id });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await levelModel.findByIdAndRemove(id);
    res.send({ message: "Level successful removed" });
  } catch (error) {
    res.status(500).send({ message: "Could not remove level id: " + id });
  }
};

export default { create, findAll, findOne, update, remove };
