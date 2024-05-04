const express = require("express");
const {
  getAllAstrologers,
  createAstrologer,
  updateAstrologer,
  deleteAstrologer,
} = require("../controller/astrologer_controller");

const astrologerRouter = express.Router();

astrologerRouter.get("/", getAllAstrologers);

astrologerRouter.post("/", createAstrologer);

astrologerRouter.patch("/:id", updateAstrologer);

astrologerRouter.delete("/:id",deleteAstrologer);

module.exports = {astrologerRouter};
