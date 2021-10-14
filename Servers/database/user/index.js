import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    address: [{detail: {type: String}, for: {type: String}}],
    phoneNumber: [{type: Number}]
},
{
    timestamps: true,
});

UserSchema.methods.generateJwtToken = function(){
    return jwt.sign({user: this._id.toString()}, "ZomatoApp");
};

UserSchema.statics.findEmailAndPhone = async({email,phoneNumber})=> {
    //check whether the email exits or not
    const checkUserByEmail = await UserModel.findOne({email});

    //check whether the phoneNumber exits
    const checkUserByPhone = await UserModel.findOne({phoneNumber});
    if(checkUserByEmail||checkUserByPhone){
        throw new Error("User already exits");
    }

    return false;
};

//for signin
UserSchema.statics.findEmailAndPassword = async({email,password})=> {
    //check whether the email exits or not
    const user = await UserModel.findOne({email});
    //check if user exits
    if(!user) throw Error("User does not exist");
    
    //check whether the password matches
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if(!doesPasswordMatch){
        throw new Error("Invalid password");
    }

    return user;
};

UserSchema.pre("save",function(next){
    const user = this;//'this'- present user
    
    //if password is not modified
    if(!user.isModified("password")) return next();

    //generating the bcrypt salt
    bcrypt.genSalt(8,(error,salt)=> {
        if(error) return next(error);

        //hashing the password
        bcrypt.hash(user.password, salt, (error,hash)=> {
            if(error) return next(error);

            //assigning hashed password
            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model("Users", UserSchema);

//pre(when this is done,this should be done)