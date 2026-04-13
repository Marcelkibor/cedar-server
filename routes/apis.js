const express = require("express");
const router = express.Router();
const { CreateService,GetServices } = require("../Services/ManageService");

router.post("/add-service", async (req, res) => {
  let result = await CreateService(req.body);
  res.json(result);
});
router.get("/get-services", async (req, res) => {
  let result = await GetServices();
  res.json(result);
});
router.post("/add-member", async (req, res) => {
  let result = await CreateMember(req.body);
  res.json(result);
});
router.get("/get-members", async (req, res) => {
  let result = await GetMembers();
  res.json(result);
});
router.post("/add-insurance", async (req, res) => {
  let result = await CreateInsurance(req.body);
  res.json(result);
});
router.get("/get-insurances", async (req, res) => {
  let result = await GetInsurances();
  res.json(result);
});
module.exports = router;