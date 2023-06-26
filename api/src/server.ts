import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import {
  getUsers,
  getUsersById,
  addUser,
  updateUser,
  getModality,
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
app.get('/modality', getModality);

// rotas POST
app.post('/add_user', addUser);
// app.post('/add_user', addUser);

// rotas PUT
app.put('/update_user/:id', updateUser);
// app.put('/update_user/:id', updateUser);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Api rodando na porta ${port}`);
});
