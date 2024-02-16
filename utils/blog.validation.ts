import Joi from "joi";

export const isBlog = Joi.object({
    title: isString.required(),
    content: isText.required()
});
