import { db } from '../models/index.js';
import { userModel } from '../models/userModels.js';

const create = async (req, res) => {
  const name = req.body.name;
  const cpf = req.body.cpf;
  const email = req.body.email;
  const phone = req.body.phone;
  const profileImage = req.body.profileImage;
  const score = 0;
  const level = 0;

  try {
    const newUser = await userModel.insertMany({
      name: name,
      cpf: cpf,
      email: email,
      phone: phone,
      score: score,
      level: level,
      profileImage: profileImage,
    });
    res.send(newUser);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Inexpected error!' });
  }
};

// const findAll = async (req, res) => {
//   const name = req.query.name;

//   // condicao para o filtro no findAll
//   var condition = name
//     ? { name: { $regex: new RegExp(name), $options: 'i' } }
//     : {};

//   try {
//     const allUsers = await userModel.find(condition);

//     if (allUsers.length < 1) {
//       res.send('This name is not in database');
//     }

//     res.send(allUsers);
//   } catch (error) {
//     res.status(500).send({ message: error.message || 'Error to list documents' });
//   }
// };

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userModel.findById(id);
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: 'Could not find user id: ' + id });
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data can not be empty',
    });
  }

  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const profileImage = req.body.profileImage;

  try {
    await userModel.findByIdAndUpdate(id, {
      name: name,
      email: email,
      phone: phone,
      profilemage: profileImage,
    });
    res.send({ message: 'User updated!' });
  } catch (error) {
    res.status(500).send({ message: 'Could not update user id: ' + id });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await userModel.findByIdAndRemove(id);
    res.send({ message: 'User successful removed' });
  } catch (error) {
    res.status(500).send({ message: 'Could not find user id: ' + id });
  }
};

export default { create, findOne, update, remove };
