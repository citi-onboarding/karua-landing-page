import express from 'express';
import UserController from '@controllers/UserController'
import ArtistController from '@controllers/ArtistsController';
import SendEmail from '@controllers/mailController'

const routes = express.Router();
const userController = new UserController();
const artistController = new ArtistController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/artist', artistController.create);
routes.get('/artist', artistController.get);
routes.delete('/artist/:id', artistController.delete);
routes.put('/artist/:id', artistController.update);

routes.post('/mail', SendEmail);


export default routes;