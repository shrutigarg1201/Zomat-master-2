import joi from "joi";

export const ValidationSearch = (restaurantObj) => {
    const Schema = joi.object({
        searchString: joi.string().required()
    });

    return Schema.validateAsync(restaurantObj);
};

export const ValidationRestaurantCity = (restaurantObj) => {
    const Schema = joi.object({
        city: joi.string().required()
    });

    return Schema.validateAsync(restaurantObj);
};
