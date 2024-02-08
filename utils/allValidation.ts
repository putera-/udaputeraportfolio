// const istruthy = Joi.boolean().truthy();
// const isID = Joi.number().positive().required();
// const isString = Joi.string().min(3).max(100).trim().required();
// const isText = Joi.string().trim().min(3);
// const isURL = Joi.string().trim().uri();

// istruthy,
// isID,
// isString,
// isText,
// isURL
import Joi from 'joi';

const isEmail = Joi.string().email({ tlds: { allow: false } }).max(100).trim().label("Email");
const isPassword = Joi.string().min(6).max(100).trim().label("Password");

export {
    isEmail,
    isPassword
};
