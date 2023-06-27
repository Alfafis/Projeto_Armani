import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import {
  getUsers,
  getUsersById,
  getModality,
  getModalityUserId,
  addUser,
  updateUser,
  addUserModality,
  updateUserModality,
  getUsersModality,
} from './routes';

dotenv.config();

export const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const port = process.env.PORT || 3000;

app.set('port', port);
app.use(cors());
app.use(express.json());

// rotas GET
app.get('/users', getUsers);
app.get('/users/:id', getUsersById);
app.get('/usersModality:id', getUsersModality);
app.get('/modality', getModality);
app.get('/usersModality/:id', getModalityUserId);

// rotas POST
app.post('/users', addUser);
app.post('/modality', addUserModality);

// rotas PUT
app.put('/users/:id', updateUser);
app.put('/modality/:id', updateUserModality);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Api rodando na porta ${port}`);
});
