const Joi = require('joi')


class jobValidation {
    static createJob = {
        body: Joi.object().keys({
            name: Joi.string().required(),
            company_name: Joi.string().required(),
            designation: Joi.string().required(),
            job_title: Joi.string().required(),
            email: Joi.string().email({ tlds: { allow: false } }).required().messages({
                'string.email': 'Invalid email format.',
                'string.empty': 'Email is required.',
            }),
            contact_no: Joi.string().required(),
            gender: Joi.string().required(),
        })
    }
}

module.exports = { jobValidation };