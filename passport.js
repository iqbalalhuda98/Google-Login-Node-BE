const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

// Open https://console.cloud.google.com/
const GOOGLE_CLIENT_ID =
  "1068123877759-3fu5ahdsj3olsbut0mtsjl47so60unii.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

// FACEBOOK_APP_ID = "";
// FACEBOOK_APP_SECRET = "";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
