import Joi from 'joi';

const maxYear = new Date().getFullYear();
const educationValidation = Joi.object({
    institutionName: Joi.string().min(3).max(100).trim().required().label("Institution Name"),
    startYear: Joi.number().max(maxYear).positive().required().label("Start Year"),
    endYear: Joi.number().max(maxYear).positive().allow(null, "").label("End Year"),
    major: Joi.string().max(100).trim().allow(null, "").label("Major"),
    degree: Joi.string().max(100).trim().allow(null, "").label("Degree")
});

export {
    educationValidation
}
