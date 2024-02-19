import Joi from 'joi';

const skillValidation = Joi.object({
    title: isString.label("Skill Title"),
    svg: Joi.string().trim().allow(null, ""),
    category: Joi.string().min(3).max(100).trim().uppercase().required().label("Category")
});

export {
    skillValidation
};
