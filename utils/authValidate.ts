import Joi from 'joi';
import { isEmail, isPassword, isString } from './allValidation';

const authValidation = Joi.object({
    email: isEmail,
    password: isPassword
});

const updateUserValidation = Joi.object({
    name: isString.label("Name"),
    email: isString.label("Email"),
    old_password: isPassword.label("Old Password"),
    password: isPassword.label("Password"),
    password_confirm: isPassword
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
