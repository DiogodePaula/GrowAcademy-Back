import { Router } from 'express';

import cors from 'cors';

import UserController from './app/controllers/UserController';
import GrowdeverController from './app/controllers/GrowdeverController';
import ClasseController from './app/controllers/ClasseController';
import ClassUserController from './app/controllers/ClassUserController';

import AuthController from './app/controllers/AuthController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json({ result: 'E ai' }));

routes.post('/login', AuthController.store);
routes.post('/users', UserController.store);

// routes.use(authMiddleware);

// Users (auth)
routes.get('/users', UserController.index);
routes.get('/users/:uid', UserController.show);
routes.put('/users/:uid', UserController.update);
routes.delete('/users/:uid', UserController.delete);

routes.post('/growdevers', GrowdeverController.store);
routes.get('/growdevers', GrowdeverController.index);
routes.get('/growdevers/:uid', GrowdeverController.show);
routes.put('/growdevers/:uid', GrowdeverController.update);
routes.delete('/growdevers/:uid', GrowdeverController.delete);

routes.post('/classes', ClasseController.store);
routes.get('/classes', ClasseController.index);
routes.get('/classes/:uid', ClasseController.show);
routes.put('/classes/:uid', ClasseController.update);
routes.delete('/classes/:uid', ClasseController.delete);

routes.post('/class-users', ClassUserController.store);
routes.get('/class-users', ClassUserController.index);
routes.get('/class-users/:uid', ClassUserController.show);
routes.put('/class-users/:uid', ClasseController.update);
routes.delete('/class-users/:uid', ClassUserController.delete);

export default routes;
