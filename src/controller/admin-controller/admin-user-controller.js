const adminUserModel = require('../../modal/admin-modal/admin-user-model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createAdminUser = async (req, res) => {
    const { company_name, company_contact, company_email, company_userId, password } = req.body;

    let data = {}
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (company_name || company_contact || company_email || password) {
        data['company_name'] = company_name
        data['company_contact'] = company_contact
        data['company_email'] = company_email
        data['company_uerId'] = company_userId
        data['password'] = hashedPassword
    } else {
        res.send('Need to field mendetory field')
    }

    const checkIsDuplicate = await adminUserModel.findOne({ company_email });

    if (!checkIsDuplicate?.id) {
        const createAdminUser = await adminUserModel.create(data)

        if (createAdminUser) {
            res.send("Sing-up successfully");
        };
    } else {
        res.send("deplicated value")
    }
};

const loginAdminUser = async (req, res) => {
    const { userId, password } = req.body
    const company_email = userId
    const checkIsUser = await adminUserModel.findOne({ company_email });
    const secret_key = process.env.SECRET_KEY_MY

    if (checkIsUser?.id) {
        const IsValidAuth = await bcrypt.compare(password, checkIsUser.password);
        const token = jwt.sign(checkIsUser, secret_key, { expiresIn: '1h' });

        if (IsValidAuth) {
            res.json({ staus: true, message: 'Login successfully', data: checkIsUser, token: token });
        } else {
            res.send("requested is unAuthorise");
        }
    } else {
        res.send("requested is unAuthorise");
    }

}

module.exports = { createAdminUser, loginAdminUser }