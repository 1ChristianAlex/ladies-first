import { Router } from 'express';

import { User } from '../app/models/user';

export const routes = Router();

routes.get('/', (req, res, next) => {
  res.json({ mensage: 'alive' });
  next();
});
