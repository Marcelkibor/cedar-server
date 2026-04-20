const express = require("express");
const router = express.Router();
const { CreateService,GetServices} = require("../Services/ManageService");
const { CreateMember, GetMembers} = require("../Team/ManageTeam");
const {CreateInsurance, DeleteInsurance, GetInsurances} = require("../Insurance/ManageInsurance");
router.post("/add-service", async (req, res) => {
  let result = await CreateService(req.body);
  res.json(result);
});
router.get("/get-services", async (req, res) => {
  let result = await GetServices();
  console.log('services', result);
  res.json(result);
});
router.post("/add-member", async (req, res) => {
  let result  = await CreateMember(req.body);
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
router.delete("/delete-insurance/:id", async (req, res) => {
  const id = req.params.id;
  let result = await DeleteInsurance(id);
  res.json(result);
});
module.exports = router;