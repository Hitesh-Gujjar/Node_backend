const jobModel = require('../../modal/job-list/job-modal');

const createJob = async (req, res) => {
    const { company_name, designation, job_title, email, contact_no, gender, isActive, industry_type, role, description_company, key_skill, } = req.body;

    const creat_jobs = {
        company_name, designation, job_title, email, contact_no, gender, isActive, industry_type, role, description_company, key_skill
    };

    const create_jobs = await jobModel.create(creat_jobs);
    if (create_jobs) {
        return res.status(200).json({
            staus: true,
            message: 'Job create successfully',
            data: create_jobs,
        });
    } else {
        return res.status(200).json({
            staus: false,
            message: 'Something went wrong',
            data: create_jobs,
        });
    }


};

const jobList = async (req, res) => {

    const getAllJobs = await jobModel.fine();

    if (getAllJobs) {
        return res.status(200).json({
            staus: true,
            message: 'Job list retrive sucessfully',
            data: getAllJobs,
        });
    } else {
        return res.status(200).json({
            staus: true,
            message: 'Something went wrong',
            data: [],
        });
    }

};

const inActiveJob = (req, res) => {

};

const activeJob = (req, res) => {

};

module.exports = { createJob, jobList, inActiveJob, activeJob };