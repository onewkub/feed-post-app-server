import { Request, Response } from "express";

const basicController = {
  helloWorld: (_: Request, res: Response) => {
    res.status(200).json("Hello World");
  },
  basicMiddleWare: (_: Request, res: Response) => {
    res.status(200).json("your status more than 10 Successfully");
  },
};

export default basicController;
