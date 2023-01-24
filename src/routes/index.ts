import { Request, Response, NextFunction } from "express";
import express from 'express';
import isAuth from '../utils/isAuth';

const router = express.Router();

// curl -X GET localhost:{PORT}/healthcheck
router.get("/healthcheck", (req: Request, res: Response) => {
  return res.sendStatus(200).json({message: 'pass!'})
});

// curl -X GET localhost:{PORT}/auth
router.get("/auth", (req: Request, res: Response, next:NextFunction) => {
  isAuth(req, res, next);
  res.sendStatus(200)
});

// curl -X GET localhost:{PORT}/time
router.get('/time', (req: Request, res: Response, next: NextFunction) => {
  // isAuth(req, res, next);
  return res.status(200).json({ epoch: 42 });
});



export default router