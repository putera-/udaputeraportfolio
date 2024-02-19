import Joi from 'joi';

export const isProject = Joi.object({
    title: isString.required().label("Project Title"),
    description: isText.required().label("Description"),
    startDate: Joi.date().max('now').required().label("Start Date"),
    endDate: Joi.date().min(Joi.ref('startDate')).max('now').allow(null, "").label("End Date"),
    url: isURL.allow(null, "").label("URL"),
    github: isURL.allow(null, "").label("Github"),
    gitlab: isURL.allow(null, "").label("Gitlab"),
    status: Joi.string().uppercase().valid('ON_PROGRESS', 'COMPLETE', 'MAINTENANCE').label("Status"),
    company: Joi.string().min(3).max(100).trim().allow(null, "").label("Company"),
    skills: Joi.array().items(Joi.number().positive()).unique().label('Skills').label("Skills"),
});
