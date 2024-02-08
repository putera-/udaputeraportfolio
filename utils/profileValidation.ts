import Joi from 'joi';
import { isEmail, isString, isText, isURL } from './allValidation';

const phoneRegex = /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/;
const profileValidate = Joi.object({
    firstname: isString.required().label("First name"),
    lastname: isString.required().label("Last name"),
    job: isString.label("Job"),
    email: isEmail.label("Email"),
    phone: isText.regex(phoneRegex).label('Phone Number'),
    dob: Joi.date().label("Date of birth"),
    address: isText.label("Address"),
    city: isString.label("City"),
    country: isString.label("Country"),
    avatar: isText.allow(null, "").label("Avatar"),
    bio: isText.allow(null, "").label("Bio"),
});
const socialValidate = Joi.object({
    web: isURL.allow(null, "").label("Web"),
    github: isURL.allow(null, "").label("Github"),
    gitlab: isURL.allow(null, "").label("Gitlab"),
    linkedin: isURL.allow(null, "").label("Linkedin"),
    instagram: isURL.allow(null, "").label("Instagram"),
    facebook: isURL.allow(null, "").label("Facebook"),
    twitter: isURL.allow(null, "").label("Twitter"),
    discord: isURL.allow(null, "").label("Discord")
});


export {
    profileValidate,
    socialValidate
};
