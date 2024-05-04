const {userModel} = require('../model/user_model');
const flowDistributionService = require('../services/flow_distribution_service');

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const newUser = await userModel.create({ name });
        
        const connectedAstrologer = await flowDistributionService.connectUserToTopAstrologer(newUser._id);
        if (!connectedAstrologer) {
          console.log('Failed to connect user to top astrologer');
        }
  
        res.status(201).json({ user: newUser, connectedAstrologer });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
};

module.exports = {getUsers,createUser}