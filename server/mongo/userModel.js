const mongoose = require("mongoose");
const CONSTANTS = require("../constants");

// TODO - Validate the field exanmples at https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527
const User = mongoose.model(
    CONSTANTS.COSMOS.COLLECTION,
    new mongoose.Schema({
      firstName: String,
      lastName: String,
      email: String
    })
);

module.exports = User;
  