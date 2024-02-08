import Joi from 'joi';
import { isEmail, isPassword } from './allValidation';

const authValidation = Joi.object({
    email: isEmail,
    password: isPassword
});

export {
    authValidation
}
