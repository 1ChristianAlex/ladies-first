import { TokenVerify } from '../app/middleware/JsonWebTokenMiddle';
import { UserRoute } from '../app/routes/UserRoute';
import { PostRoute } from '../app/routes/PostRoute';
import { ImageRoute } from '../app/routes/ImagesRoute';
import { FollowRouter } from '../app/routes/FollowPersonRoute';
import { Router } from 'express';

export const routes = Router();

routes.use('/api/', TokenVerify); //Middleware de verificação de token para as rotas privadas /api/
routes.use(UserRoute); //Middleware de usuário
routes.use(PostRoute); //Middleware de Postagem
routes.use(ImageRoute);
routes.use(FollowRouter);
