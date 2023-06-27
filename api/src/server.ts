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
app.get('/modality', getModality);
app.get('/students', getStudents);

// rotas POST
app.post('/users/:id', addUser);
app.post('/students/:id', addStudents);

// rotas PUT
app.put('/users/:id', updateUser);
app.put('/students/:id', updateStudents);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Api rodando na porta ${port}`);
});
