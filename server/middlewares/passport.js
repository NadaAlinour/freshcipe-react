import passport from "passport";
import LocalStrategy from "passport-local";

import * as authSerivce from "../services/authService.js";
import bcrypt from "bcryptjs";

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await authSerivce.getUser({
          email: email,
          password: password,
        });

        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }
        if (await !bcrypt.compare(password, user.password)) {
          return done(null, false, { message: "Incorrect password" });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await authSerivce.getUserById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
