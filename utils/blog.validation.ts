import Joi from "joi";

export const isBlog = Joi.object({
    title: isString.required().label("Title"),
    content: isText.required().label("Content")
});
