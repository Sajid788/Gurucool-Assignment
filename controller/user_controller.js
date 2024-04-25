const {userModel} = require('../model/user_model');

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    const user = new userModel({
        name: req.body.name,
        birthdate: req.body.birthdate
    });

    try {
        const newUser = await user.save();
        res.status(201).json({msg: "User Created Successfully", newUser});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {getUsers,createUser}