import passport from "passport";
import bcrypt from "bcrypt";
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions as JwtStrategyOption,
} from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import prisma from "./prisma";
import { isNil } from "lodash";
import jwt from "jsonwebtoken";

const JWT_SECRET = "THIS_JWT_SECRET";

// สร้าง passport สำหรับ Authentication ผู้ใช้ด้วย Username และ Password
passport.use(
  new LocalStrategy(async (username, password, done) => {
    
  })
);


// สร้าง passport สำหรับ Authentication ผู้ใช้ด้วย Token ที่ให้
const opts: JwtStrategyOption = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};
passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    done(null, jwt_payload);
  })
);

export default passport;
