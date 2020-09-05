import express from 'express';
import levelController from '../controllers/levelController.js';

const app = express();

app.post('/', levelController.create);
app.get('/', levelController.findAll);
app.get('/:id', levelController.findOne);
app.put('/:id', levelController.update);
app.delete('/:id', levelController.remove);

export { app as levelRouter };
