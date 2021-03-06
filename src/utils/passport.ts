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
    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (!isNil(user)) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const payload = {
          userId: user.userId,
          username: user.username,
          email: user.email,
        };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "30d" });
        return done(null, {
          ...payload,
          token: `bearer ${token}`,
        });
      } else {
        return done(new Error("Username or Password are wrong."));
      }
    } else {
      return done(new Error("Username or Password are wrong."));
    }
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
