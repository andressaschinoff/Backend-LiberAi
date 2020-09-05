import { db } from '../models/index.js';
import { levelModel } from '../models/levelModels.js';

const create = async (req, res) => {
  const course = req.body.course;
  const video = req.body.video;
  const extraQuizz = req.body.extraQuizz;
  const battle = req.body.battle;
  const opcional = req.body.opcional;

  try {
    const newLevel = await levelModel.insertMany({
      course: course,
      video: video,
      extraQuizz: extraQuizz,
      battle: battle,
      opcional: opcional,
    });
    res.send(newLevel);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Inexpected error!' });
  }
};

const findAll = async (req, res) => {
  try {
    const allLevels = await levelModel.find({});

    res.send(allLevels);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Error to find all documents' });
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const level = await levelModel.findById(id);
    res.send(level);
  } catch (error) {
    res.status(500).send({ message: 'Could not find level id: ' + id });
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data can not be empty',
    });
  }

  const id = req.params.id;
  const course = req.body.course;
  const video = req.body.video;
  const extraQuizz = req.body.extraQuizz;
  const battle = req.body.battle;
  const opcional = req.body.opcional;

  try {
    await levelModel.findByIdAndUpdate(id, {
      course: course,
      video: video,
      extraQuizz: extraQuizz,
      battle: battle,
      opcional: opcional,
    });
    res.send({ message: 'Level updated!' });
  } catch (error) {
    res.status(500).send({ message: 'Could not update level id: ' + id });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await levelModel.findByIdAndRemove(id);
    res.send({ message: 'Level successful removed' });
  } catch (error) {
    res.status(500).send({ message: 'Could not remove level id: ' + id });
  }
};

export default { create, findAll, findOne, update, remove };
