//require("dotenv").config();

import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import {ImageModel} from "../../database/allModels";

//utilities
import {s3Upload} from "../../Utilities/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();//allow multer to save all images in ram of server
const upload = multer({storage});

//AWS S3 bucket config

/**
 * Route               /
 * Des                 uploading given image to S3 bucket , and then saving the file to mongo
 * params              none
 * access              public
 * method              POST
 */

Router.post("/", upload.single("file"),async(req, res) => {
    try{
        const file = req.file; //from postman

        //S3 bucket options
        const bucketOptions = {
            Bucket: "shrutiwebdev",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read" 
        };

        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({uploadImage});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;