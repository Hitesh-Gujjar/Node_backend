
const mongoose = require('mongoose');

const adminUserSchema = mongoose.Schema({
    company_name: {
        types: String,
        require: [true, 'Please enter the company name']
    },
    company_contact: {
        types: String,
        require: [true, 'please enter the contact number']
    },
    company_email: {
        types: String,
        require: [true, 'Please enter the email Id']
    }
},
    {
        timestamps: true,
    });

module.exports = mongoose.model("admin-user", adminUserSchema)
