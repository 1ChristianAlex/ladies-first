import { Request, Response, NextFunction } from 'express';
import LoginControler from '../controllers/User/LoginController';
import { JsonWebToken } from '../resources';

// Função de verificação de token para o middleware

export const TokenVerify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token;
    const jwt = new JsonWebToken();

    if (req.headers.authorization) {
      token = req.headers.authorization;
    } else {
      res.status(401).json({ mensage: 'Invalid token, please loged again' });
      return false;
    }

    let bodyResponse = req.body;

    let userAuth = await jwt.VerifyToken(token);

    if (userAuth) {
      req.body = {
        user: userAuth,
        ...bodyResponse
      };
      next();
    } else {
      res.status(401).json({ mensage: 'Invalid token, please loged again' });
    }
  } catch (error) {
    res.status(401).json({ mensage: 'Invalid token, please loged again' });
  }
};
