import { userModel } from "../models/userModels.js";

const create = async (req, res) => {
  const name = req.body.name;
  const profileImage = req.body.profileImage;
  const score = 0;
  const level = 0;
  const activities = [];

  try {
    const newUser = await userModel.insertMany({
      name: name,
      score: score,
      level: level,
      profileImage: profileImage,
      activities: activities,
    });
    res.send(newUser);
  } catch (error) {
    res.status(500).send({ message: error.message || "Inexpected error!" });
  }
};

const findAll = async (req, res) => {
  const name = req.query.name;

  // condicao para o filtro no findAll
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  try {
    const allUsers = await userModel.find(condition);

    if (allUsers.length < 1) {
      res.send("This name is not in database");
    }

    res.send(allUsers);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Error to list documents" });
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userModel.findById(id);
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: "Could not find user id: " + id });
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data can not be empty",
    });
  }

  const id = req.params.id;
  const name = req.body.name;
  const profileImage = req.body.profileImage;
  const score = req.body.score;
  const level = req.body.level;
  const activities = req.body.activities;

  try {
    await userModel.findByIdAndUpdate(id, {
      name: name,
      profilemage: profileImage,
      score: score,
      level: level,
      activities: activities,
    });
    res.send({ message: "User updated!" });
  } catch (error) {
    res.status(500).send({ message: "Could not update user id: " + id });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await userModel.findByIdAndRemove(id);
    res.send({ message: "User successful removed" });
  } catch (error) {
    res.status(500).send({ message: "Could not find user id: " + id });
  }
};

export default { create, findAll, findOne, update, remove };
