const jwt = require('jsonwebtoken')
const UserModel = require('../models/taskModel')
const userModel = require('../models/userModel')

const auth = async(req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token, "mysaltstringexample")
        const user = await UserModel.findOne({_id:decoded._id,'tokens.token':token})
        if(!user){
            throw new Error()
        }
        req.token = token
        req.user = userModel
        next()
    } catch (error) {
        res.status(401).send({error:'Please authenticate'})
    }
}

module.exports = auth