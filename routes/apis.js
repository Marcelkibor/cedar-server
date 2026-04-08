const express = require("express");
const router = express.Router();


router.post("/add-service", (req, res) => {
  res.json({ message: "Service added successfully" });
});
router.get("/get-services", (req, res) => {
  res.json({ message: "Services retrieved successfully" });
});
router.post("/add-member", (req, res) => {
  res.json({ message: "Member added successfully" });
});
router.get("/get-members", (req, res) => {
  res.json({ message: "Members retrieved successfully" });
});
router.post("/add-insurance", (req, res) => {
  res.json({ message: "Insurance added successfully" });
});
router.get("/get-insurances", (req, res) => {
  res.json({ message: "Insurances retrieved successfully" });
});
module.exports = router;