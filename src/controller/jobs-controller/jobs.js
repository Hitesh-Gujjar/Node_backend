const jobModel = require('../../modal/job-list/job-modal');

const createJob = async (req, res) => {
    const { company_name, designation, job_title, email, contact_no, gender, isActive, industry_type, role, description_company, key_skill, } = req.body;

    let creat_jobs = {};
    let isValid = false;
    if (company_name) {
        isValid = true;
        creat_jobs['company_name'] = company_name;
    }
    if (designation) {
        isValid = true;
        creat_jobs['designation'] = designation;
    }
    if (job_title) {
        isValid = true;
        creat_jobs['job_title'] = job_title;
    }
    if (email) {
        isValid = true;
        creat_jobs['email'] = email;
    }
    if (contact_no) {
        isValid = true;
        creat_jobs['contact_no'] = contact_no;
    }
    if (gender) {
        isValid = true;
        creat_jobs['gender'] = gender;
    }
    if (isActive) {
        isValid = true;
        creat_jobs['isActive'] = isActive;
    }
    if (industry_type) {
        isValid = true;
        creat_jobs['industry_type'] = industry_type;
    }
    if (role) {
        isValid = true;
        creat_jobs['role'] = role;
    }
    if (description_company) {
        isValid = true;
        creat_jobs['description_company'] = description_company;
    }
    if (key_skill) {
        isValid = true;
        creat_jobs['key_skill'] = key_skill;
    }


    // if(!isValid){
        const create_jobs=await jobModel.create(creat_jobs);
        if(create_jobs){
            return res.status(200).json({
                staus: true,
                message: 'Job create successfully',
                data: create_jobs,
            });
        }else{
            return res.status(200).json({
                staus: false,
                message: 'Something went wrong',
                data: create_jobs,
            });
        }
    // }


};

const jobList = (req, res) => {

};

const inActiveJob = (req, res) => {

};

const activeJob = (req, res) => {

};

module.exports = { createJob, jobList, inActiveJob, activeJob };