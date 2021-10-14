//Libraries
import express from "express";
//import passport from "passport";

//Datbase Model
import { FoodModel } from "../../database/allModels";

//Validation
import { ValidationCategory, ValidationRestaurantId } from "../../Validation/food";

const Router = express.Router();

/**
 * Route               /
 * Des                 Get all the foods bsed on particular restaurant
 * params              _id
 * access              public
 * method              GET
 */
Router.get("/:_id", async(req, res) => {
    try{
        await ValidationRestaurantId(req.params);
        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant: _id});
        return res.json({foods});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/**
 * Route               /r
 * Des                 Get all the foods bsed on particular category
 * params              category
 * access              public
 * method              GET
 */
Router.get("/r/:category", async(req,res) => {
    try{
        await ValidationCategory(req.params);
        const {category} = req.params;
        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i"}
        });

        return res.json({foods});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;

