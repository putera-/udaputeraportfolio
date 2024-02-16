import Joi from "joi";

export const isBlog = Joi.object({
    title: isString.required(),
    content: isText.required(),
    photos: Joi.array().items(Joi.object({
        id: Joi.number(),
        index: Joi.number()
    })).label('Photos')
});
