import { NextFunction, Request, Response } from "express";

const validateQueryParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const value = req.query.value;
  if (Number(value) >= 10) {
    return next();
  } else {
    return res.status(400).json("Your value less than 10.");
  }
};

export default validateQueryParams;
