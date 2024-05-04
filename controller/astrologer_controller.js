const {AstrologerModel} = require('../model/astrologer_model');

   const getAllAstrologers =  async (req, res) => {
    try {
      const astrologers = await AstrologerModel.find();
      res.json(astrologers);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const createAstrologer = async (req, res) => {
    try {
        const { name, specialty, rating } = req.body;
        if (!name || !specialty || !rating) {
            return res.status(400).json({ error: 'Please enter all required fields' });
        }

        const astrologer = new AstrologerModel({ name, specialty, rating });
        await astrologer.save();
        res.status(201).json(astrologer);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


  const updateAstrologer =  async (req, res) => {
    try {
        const { id } = req.params;
        const { name, specialty, rating, adjustment } = req.body;
        const updatedAstrologer = await AstrologerModel.findByIdAndUpdate(id, { name, specialty, rating, flowAdjustment: adjustment }, { new: true });
        if (!updatedAstrologer) {
          return res.status(404).json({ error: 'Astrologer not found' });
        }
        res.json(updatedAstrologer);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const deleteAstrologer = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAstrologer = await AstrologerModel.findByIdAndDelete(id);
      if (!deletedAstrologer) {
        return res.status(404).json({ error: 'Astrologer not found' });
      }
      res.json({ message: 'Astrologer deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


module.exports = {getAllAstrologers,createAstrologer,updateAstrologer,deleteAstrologer};
