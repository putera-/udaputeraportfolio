import Joi from 'joi';
import { isEmail, isPassword, isString } from './allValidation';

const authValidation = Joi.object({
    email: isEmail,
    password: isPassword
});

const updateUserValidation = Joi.object({
    name: isString.required().label("Name"),
    email: isString.required().label("Email"),
    password: isPassword.required().label("Password"),
    password_confirm: isPassword.required()
        .valid(Joi.ref('password'))
        .label("Password Confirm")
        .options({
            messages: {
                'any.only': '{{#label}} is not match'
            }
        })
});

export {
    authValidation,
    updateUserValidation
}
