import { TokenVerify } from '../app/middleware/JsonWebTokenMiddle';
import { UserMiddleware } from '../app/middleware/UserMiddleware';

import { Router } from 'express';

export const routes = Router();

routes.use('/api/', TokenVerify);
routes.use(UserMiddleware);
