import passport from "passport";
import googleStrategy from "passport-google-plus-token";

passport.use('googleLogin',  new googleStrategy({
  clientID: "980071772671-nj90rlofkcf76bdcobui2597rc0gc3r4.apps.googleusercontent.com",
  clientSecret: "QMKlIzL_yTBrkQLeuYSckuQc",
}, async (accessToken, refreshToken, profile, done) => {
  console.log(profile);
}))