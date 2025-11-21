// sets up Passport with local authentication strategy, using a Person model for user data. - Auth.js file

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/Person");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      // console.log("Received Credentials:", username, password);
      const user = await Person.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "username not found" });
      }
      const isPasswordMatch = await user.comparePassword(password);
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport; // Export configured passport
