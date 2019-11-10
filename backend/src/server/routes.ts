import { TokenVerify } from '../app/middleware/JsonWebTokenMiddle';
import { UserRoute } from '../app/routes/UserRoute';
import { PostRoute } from '../app/routes/PostRoute';
import { FollowRouter } from '../app/routes/FollowerRoute';
import { Router } from 'express';

export const routes = Router();

routes.use('/api/', TokenVerify); //Middleware de verificação de token para as rotas privadas /api/
routes.use(UserRoute); //Rota de usuário
routes.use(PostRoute); //Rota de Postagem
routes.use(FollowRouter);
