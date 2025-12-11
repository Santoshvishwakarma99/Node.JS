const userModel = require('../model/usermodel');
const LocalStrategy = require('passport-local').Strategy;
const LocalAuth = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        const user = await userModel.findOne({ username: username });
        if (!user) {
            return done(null, false, { message: 'User not found' });
        }
        if (user.password !== password) {
            return done(null, false, { message: 'Invalid Password' });
        }
        return done(null, user);
    }));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id);
        done(null, user);
    });
};
module.exports = LocalAuth;