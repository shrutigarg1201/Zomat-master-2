import express from "express";
import { RestaurantModel } from "../../database/allModels";

const Router = express.Router();

//Validation
import {ValidationRestaurantCity, ValidationSearch} from "../../Validation/resataurant";
import {ValidationRestaurantId} from "../../Validation/food";

/**
 * Route               /
 * Des                 Get all Restaurants detials
 * params              none
 * access              public
 * method              GET
 */

Router.get("/", async(req,res) => {
    try{
        await ValidationRestaurantCity(req.query);
        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    } catch(error) {
        return res.status(500).json({error: error.message});

    }
});

/**
 * Route               /
 * Des                 Get particular Restaurants detials on id
 * params              _id
 * access              public
 * method              GET
 */
Router.get("/:_id", async(req,res) => {
    try{
        await ValidationRestaurantId(req.params);
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);

        if(!restaurant)
        return res.status(404).json({error: "Restaurant not found"});

        return res.json({restaurant});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/**
 * Route               /search
 * Des                 Get Restaurants detials on search
 * params              none
 * body                searchString
 * access              public
 * method              GET
 */
Router.get("/search", async(req,res) => {
    try{
        await ValidationSearch(req.body);
        const {searchString} = req.body;

        const restaurants = await RestaurantModel.find({
           name: {$regex: searchString, $options: "i"}  //options: "i" for case insentivity
        });

        return res.json({restaurants});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;