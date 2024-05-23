const Joi = require('joi');

const createJobValidation = () => {
    return Jo.object({
        name: Joi.string().required(),
        company_name: Joi.string().max(80).required(),
        designation: Joi.string().max(80).required(),
        job_title: Joi.string().min(2).max(80).required(),
        email:Joi
        // contact_no
        // gender
        // isActive
        // industry_type
        // role
        // description_company
        // key_skill
    })
}