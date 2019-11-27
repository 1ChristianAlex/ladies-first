import { Router } from 'express';
import UserController from '../controllers/User/UserController';
import LoginController from '../controllers/User/LoginController';
import MulterFile from '../middleware/MulterMiddleware';

export const UserRoute = Router();

// Caminho de rotas de usuário em formato de constante

const userRouterPath = '/api/user/:id?';
const currentUserRouterPath = '/api/current/:token';
const loginRouterPath = '/login';
const registerRouterPath = '/register';

const UserC = new UserController();
const UserLogin = new LoginController();

const MulterProfile = new MulterFile('avatar');

const UserStore = MulterProfile.MulterEng;
const UserStoreTypeSingle = UserStore.any();

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
  .patch(
    (req, res, next) => {
      req.headers.user = req.body.user;
      next();
    },

    UserStoreTypeSingle,
    async (req, res, next) => {
      try {
        let {
          user: { id }
        }: any = req.headers;
        let { updateInfo } = req.body;
        let [file]: any = req.files;
        let userInfoUpdate = JSON.parse(updateInfo);

        let update = await UserC.UpdateUser(id, userInfoUpdate, file);
        res.json(update);
      } catch (error) {
        res.status(406).json({ mensage: 'Fail on update' });
      }
    }
  )
  .delete(async (req, res, next) => {
    try {
      let { id } = req.body;
      let deleteResult = await UserC.DeleteUser(id);
      res.json(deleteResult);
    } catch (error) {
      res.status(406).json({ mensage: 'Not deleted' });
    }
  });
UserRoute.get(currentUserRouterPath, async (req, res, next) => {
  try {
    let { token } = req.params;
    let currentUser = await UserC.GetCurrentUser(token);
    res.json(currentUser);
    next();
  } catch (error) {
    res.status(404).json(error.mensage);
  }
});
// Rota de registro
UserRoute.post(
  registerRouterPath,
  UserStoreTypeSingle,
  async (req, res, next) => {
    try {
      let { user } = req.body;
      let [files]: any = req.files;

      let result = await UserC.CreateUser(JSON.parse(user), files);
      res.status(202).json(result);
      next();
    } catch (error) {
      res.status(400).json({ mensage: 'Bad Request', error });
    }
  }
);

// Rota de Login
UserRoute.post(loginRouterPath, async (req, res, next) => {
  try {
    let { email, password } = req.body;

    let loginResult = await UserLogin.Login(email, password);

    res.status(200).json(loginResult);

    next();
  } catch (error) {
    res.status(400).json({ mensage: 'Usuário ou senha invalidos' });
  }
});
