import { Request, Response, NextFunction } from 'express';
import LoginControler from '../controllers/LoginControler';

export const TokenVerify = async (req: Request, res: Response, next: NextFunction) => {
  let loginControl = new LoginControler();
  console.log(req.headers);
  let token;
  if (req.headers['leaf-access-token']) {
    token = req.headers['leaf-access-token'];
  } else {
    res.status(401).json({ mensage: 'Invalid token, please loged again' });
    return false;
  }

  let bodyResponse = req.body;

  let userAuth = await loginControl.IsLoged(token);

  if (userAuth != false) {
    req.body = {
      user: userAuth,
      ...bodyResponse
    };
    next();
  } else {
    res.status(401).json({ mensage: 'Invalid token, please loged again' });
  }
};
