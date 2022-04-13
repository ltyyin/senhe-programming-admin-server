import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (token) {
      try {
        this.jwtService.verify(token.replace('Bearer ', ''));
        next();
      } catch (err) {
        if (err.message == 'jwt expired') {
          res.status(HttpStatus.METHOD_NOT_ALLOWED);
          res.send({
            code: 50005,
            message: '请重新刷新令牌！',
          });
          return;
        }
        res.status(HttpStatus.UNAUTHORIZED);
        res.send({
          code: 50012,
          message: '请重新登录',
        });
      }
    } else {
      res.status(HttpStatus.UNAUTHORIZED);
      res.send({
        code: 50001,
        message: '请重新登录',
      });
    }
  }
}
