import { Router } from 'express';

import cors from 'cors';

import UserController from './app/controllers/UserController';

import AuthController from './app/controllers/AuthController';

// import authMiddleware from './app/middlewares/auth';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json({ result: 'BOMBANDO' }));

routes.post('/login', AuthController.store);

routes.post('/users', UserController.store);

// routes.use(authMiddleware);

// Users (auth)
routes.get('/users', UserController.index);
routes.get('/users/:uid', UserController.show);
routes.put('/users/:uid', UserController.update);
routes.delete('/users/:uid', UserController.delete);

export default routes;
