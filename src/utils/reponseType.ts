import { Response } from "express";

export const OK = (res: Response, payload: any) => {
  return res.status(200).json(payload);
};

export const INTERNAL_ERROR = (
  res: Response,
  message: string = "Something went wrong"
) => {
  return res.status(500).json({ status: 500, message });
};

export const BAD_REQUEST = (res: Response, message: string) => {
  return res.status(400).json({ status: 400, message });
};

export const UNAUTHORIZE = (
  res: Response,
  message: string = "You don't have permission."
) => {
  return res.status(401).json({ status: 401, message: message });
};
