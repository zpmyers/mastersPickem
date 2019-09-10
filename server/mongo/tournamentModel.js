const mongoose = require("mongoose");
const CONSTANTS = require("../constants");

// TODO - Validate the field exanmples at https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527
const Tournament = mongoose.model(
    CONSTANTS.COSMOS.COLLECTION,
    new mongoose.Schema({
      name: String,
      location: String,
      leaderboard: [Player]
    })
);

module.exports = Tournament;