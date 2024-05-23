
const jwt = require('jsonwebtoken')

const authenticatedRequest = async (req, res, next) => {
    try {
        let token = req.headers.authorization
        const secret_key = process.env.SECRET_KEY_MY

        if (token) {
            token = token.split(" ")[1]
            let user = jwt.verify(token, secret_key)

        } else {
            res.status(401).json({ message: "Unauthorized request" })
        }

        next();
    } catch {
        res.status(401).json({ message: "Unauthorized request" })
    }


}

module.exports = { authenticatedRequest }

