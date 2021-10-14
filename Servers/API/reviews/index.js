import express from "express";

import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route               /new
 * Des                 add new review 
 * params              none
 * BODY                Review object
 * access              public
 * method              POST
 */
 Router.post("/new", async(req,res) => {
    try{
        const {reviewData} = req.body;

        await ReviewModel.create(reviewData);

        return res.json({review: "successfully created reviews"});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});


/**
 * Route               /delete
 * Des                 delete a review 
 * params              _id
 * BODY                
 * access              public
 * method              DELETE
 */
 Router.delete("/delete/:_id", async(req,res) => {
    try{
        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: "successfully deleted reviews"});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;