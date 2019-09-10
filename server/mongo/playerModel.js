const mongoose = require("mongoose");
const CONSTANTS = require("../constants");

// TODO - Validate the field exanmples at https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527
const Player = mongoose.model(
    CONSTANTS.COSMOS.COLLECTION,
    new mongoose.Schema({
      _id: mongoose.Schema.Types.ObjectId,
      firstName: String,
      lastName: String,
      country: String,
      height: Number,
      weight: Number,
      age: Number,
      college: String,
      birthPlace: String,
      fedexCupRank: Number,
      scoringAvg: mongoose.Decimal128
    })
);

module.exports = Player; 