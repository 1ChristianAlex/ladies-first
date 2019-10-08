import { TokenVerify } from '../app/middleware/JsonWebTokenMiddle';
import { UserMiddleware } from '../app/middleware/UserMiddleware';
import { PostMiddleware } from '../app/middleware/PostMiddleware';
import { FileMiddleware } from '../app/middleware/FileMiddleware';
import { Router } from 'express';

export const routes = Router();

routes.use('/api/', TokenVerify); //Middleware de verificação de token para as rotas privadas /api/
routes.use(UserMiddleware); //Middleware de usuário
routes.use(PostMiddleware); //Middleware de Postagem
routes.use(FileMiddleware);
