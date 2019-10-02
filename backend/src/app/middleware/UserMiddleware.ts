import UserController from '../controllers/UserController';
import { Router } from 'express';
import LoginController from '../controllers/LoginControler';

export const UserMiddleware = Router();
const userRouterPath = '/api/user/:id?';
const loginRouterPath = '/login';
const registerRouterPath = '/register';

const UserC = new UserController();
const UserLogin = new LoginController();

UserMiddleware.route(userRouterPath)
  .get(async (req, res, next) => {
    try {
      let { id } = req.params;
      let result = await UserC.GetUser(id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ mensage: 'Not Found' });
    }
  })
  .patch(async (req, res, next) => {
    try {
      let { id, newUser, user } = req.body;
      let update = await UserC.UpdateUser(id, newUser, user);
      res.json(update);
    } catch (error) {
      res.status(406).json({ mensage: 'Fail on update' });
    }
  })
  .delete(async (req, res, next) => {
    try {
      let { id } = req.body;
      let deleteResult = await UserC.DeleteUser(id);
      res.json(deleteResult);
    } catch (error) {
      res.status(406).json({ mensage: 'Not deleted' });
    }
  });

UserMiddleware.post(registerRouterPath, async (req, res, next) => {
  try {
    let { user } = req.body;
    let result = await UserC.CreateUser(user);
    res.status(200).json(result);
    next();
  } catch (error) {
    res.status(400).json({ mensage: 'Bad Request' });
  }
});
UserMiddleware.post(loginRouterPath, async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let loginResult = await UserLogin.Login(email, password);
    res.status(200).json(loginResult);

    next();
  } catch (error) {
    res.status(400).json({ mensage: 'Bad Request' });
  }
});
