const saveRegister = require('../services/auth.service');
const Auth = require('../models/auth.model');

const index = async (req,res) => {
    res.json({msg: 'This is origins!'});
};

const register = async (req, res) =>{
    try {
        const auth = new Auth({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        });
        const result = await saveRegister.saveRegister(auth);
        res.status(200).send(result);
        
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {index,register}