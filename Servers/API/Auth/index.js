import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

const Router = express.Router();

//Models
import { UserModel } from "../../database/user";

//Validation
import {ValidationSignup, ValidationSignin} from "../../Validation/auth";

/**
 * Route           /signup
 * description     signup with email and password
 * params          none
 * access          Public
 * Method          POST
 */

Router.post("/signup", async(req, res) => {
    try {
        await ValidationSignup(req.body.credentials);

        await UserModel.findEmailAndPhone(req.body.credentials);

        //DataBase
        const newUser = await UserModel.create(req.body.credentials);

        //JWT Auth token
        const token = newUser.generateJwtToken();

        return res.status(200).json({token});
        
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/**
 * Route           /signin
 * description     signin with email and password
 * params          none
 * access          Public
 * Method          POST
 */
 Router.post("/signin", async (req, res) => {
    try {
        await ValidationSignin(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword(
            req.body.credentials
        );

        //JWT Auth token /we used it for checking 
        const token = user.generateJwtToken();

        return res.status(200).json({token, status: "Success"});
        
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/**
 * Route           /google
 * description     google signin
 * params          none
 * access          Public
 * Method          GET
 */
Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email "
    ]
})
);

/**
 * Route           /google/callback
 * description     google signin
 * params          none
 * access          Public
 * Method          GET
 */

 Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}),
   (req,res) => {
       return res.json({token: req.session.passport.user.token});
   }
);




export default Router;

//Suppose password --chinu
//if encrtyped one -- 4u98grfi930ne58j4%ko395@%;34rfjh
//if encrypted twice -- bfvfr84754uhtjrnke902878ryghebdjoi93ET%eh83   //encrpted again
// so we need somrthing which a good number of encrptions
//we istalled bcryptjs

//method - creating a const first then using it
//example--UserModel.ourStatic()
//checkUserByEmail.ourStatic();
//static - without creating