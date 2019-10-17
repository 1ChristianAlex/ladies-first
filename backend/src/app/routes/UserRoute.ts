import { Router } from 'express';
import UserController from '../controllers/User/UserController';
import LoginController from '../controllers/User/LoginControler';

export const UserRoute = Router();

// Caminho de rotas de usuário em formato de constante

const userRouterPath = '/api/user/:id?';
const loginRouterPath = '/login';
const registerRouterPath = '/register';

const UserC = new UserController();
const UserLogin = new LoginController();

// CRUD de usuário

UserRoute.route(userRouterPath)
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
// Rota de registro
UserRoute.post(registerRouterPath, async (req, res, next) => {
  try {
    let { user } = req.body;
    let result = await UserC.CreateUser(user);
    res.status(200).json(result);
    next();
  } catch (error) {
    res.status(400).json({ mensage: 'Bad Request' });
  }
});

// Rota de Login
UserRoute.post(loginRouterPath, async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let loginResult = await UserLogin.Login(email, password);
    res.status(200).json(loginResult);

    next();
  } catch (error) {
    res.status(400).json({ mensage: 'Bad Request' });
  }
});
