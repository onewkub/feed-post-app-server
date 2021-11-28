import passport from "passport";
import bcrypt from "bcrypt";

import { Strategy as LocalStrategy } from "passport-local";
import prisma from "./prisma";
import { isNil } from "lodash";
import jwt from "jsonwebtoken";

const JWT_SECRET = "THIS_JWT_SECRET";

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
          token,
        });
      } else {
        return done(new Error("Username or Password are wrong."));
      }
    } else {
      return done(new Error("Username or Password are wrong."));
    }
  })
);

export default passport;
