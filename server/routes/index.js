const CONSTANTS = require("../constants");
const express = require("express");
const sampleData = require("../sampleData");

const mongoService = require("../mongo/mongoService");

const router = express.Router();
// Grid Page Endpoint
router.get(CONSTANTS.ENDPOINT.GRID, (req, res) => {
  res.json(sampleData.textAssets);
});

// MasterDetail Page Endpoint
router.get(CONSTANTS.ENDPOINT.MASTERDETAIL, (req, res) => {
  res.json(sampleData.textAssets);
});


//List Items
router.get(CONSTANTS.ENDPOINT.LIST, function(req, res, next) {
  mongoService.get(req, res, next);
});

router.post(CONSTANTS.ENDPOINT.LIST, function(req, res, next) {
  mongoService.create(req, res, next);
});

router.delete(CONSTANTS.ENDPOINT.LIST + "/:_id", function(req, res, next) {
  mongoService.destroy(req, res, next);
});


module.exports = router;
