import googleOAuth from "passport-google-oauth20";

import {UserModel} from "../database/allModels";

const GoogleStrategy = googleOAuth.Strategy;


export default (passport) => {   //passport is middle way in auhtentication 
    passport.use(
        new GoogleStrategy({
            clientID: "267519183530-uth519fah89nednqt83i560p607huq51.apps.googleusercontent.com",
            clientSecret: "9TFNcs08iTTuuqE9YTQL5elH",
            callbackURL: "http://localhost:4000/auth/google/callback"
        },
        async(accessToken, refreshToken, profile, done) => {
            //creating a new user
            const newUser = {
                fullname: profile.displayName,
                email: profile.emails[0].value,
                profilePic: profile.photos[0].value
            };
            try{
                //check whether user exits or not
                const user = await UserModel.findOne({email: newUser.email})
                if(user) {
                    //generating jwt token
                    const token = user.generateJwtToken();
                    //return user
                    done(null, {user, token});
                }else{
                    //creating new user
                    const user = await UserModel.create(newUser);
                    //generate jwt token
                    const token = user.generateJwtToken();

                    //return user
                    done(null, {user, token})
                }
            }catch(error){
                done(error, null);
            }
        }
        )
    );
    passport.serializeUser((userData,done) => done(null, {...userData}));
    passport.deserializeUser((id, done) => done(null, id));
};