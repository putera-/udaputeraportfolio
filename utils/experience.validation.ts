import Joi from 'joi';
import dayjs from 'dayjs';

const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const experienceValidation = Joi.object({
    company: Joi.string().min(3).max(100).trim().required().label("Company"),
    location: Joi.string().min(3).max(100).trim().required().label("Location"),
    title: Joi.string().min(3).max(100).trim().required().label("Title"),
    description: Joi.string().min(3).trim().required().label("Description"),
    startDate: Joi.date().max(tomorrow).required().label("Start Date"),
    endDate: Joi.date().min(Joi.ref('startDate')).max(tomorrow).allow(null, "").label("End Date")
});

export {
    experienceValidation
}
