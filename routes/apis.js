const express = require("express");
const router = express.Router();
const { CreateService,GetServices, DeleteService} = require("../Services/ManageService");
const { CreateMember, GetMembers, DeleteMember} = require("../Team/ManageTeam");
const {CreateInsurance, DeleteInsurance, GetInsurances} = require("../Insurance/ManageInsurance");
const {upload} = require("../middleware/upload");
router.post("/add-service", async (req, res) => {
try {
  let result = await CreateService(req.body);
  res.json(result.status);
} catch (error) {
  console.error('Error creating service:', error);
  res.status(500).json({ message: 'Internal server error', status: 500 });
}
});

router.get("/get-services", async (req, res) => {
  let result = await GetServices();
  console.log('services', result);
  res.json(result);
});

router.post("/delete-service", async (req, res) => {
  const id = req.body.id;
  let result = await DeleteService(id);
 console.log('delete result', result.message);
 return res.json({ message: result.message , status: 200 });
});

router.post("/add-member",upload.single("image"), async (req, res) => {
  const {name,description,title} = req.body;

  let result = await CreateMember({
    name,
    description,
    title,
    file:req.file, // 🔥 pass multer file
  });
  if(result){
    res.json({ message: 'Member added successfully', status: 200 });
  }
  else{
    res.json({ message: 'Failed to add member', status: 500 });
  }
});

router.get("/get-members", async (req, res) => {
  try {
    const result = await GetMembers();
    res.json(result);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ message: 'Internal server error', status: 500 });
  }
});

router.post("/delete-member", async (req, res) => {
  try {
    const id = req.body.id;
    await DeleteMember(id);
    res.json({message:"Member deleted successfully", status: 200});
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete member', status: 500 });
  }
});

router.post("/add-insurance", upload.single("image"), async (req, res) => {
  try {
    const { name } = req.body;

    await CreateInsurance({
      name,
      file: req.file, // 🔥 pass multer file
    });
    res.json({ message: "Insurance added successfully", status: 200 });
  } catch (error) {
    console.error("Error adding insurance:", error);
    res.status(500).json({ message: "Error uploading" });
  }
});

router.get("/get-insurances", async (req, res) => {
  let result = await GetInsurances();
  res.json(result);
});

router.post("/delete-insurance", async (req, res) => {
  const id = req.body.id;
  try {
    let result = await DeleteInsurance(id);
    if(result){
      res.json({message:"Insurance deleted successfully", status: 200});
    }
  } catch (error) {
    console.error('Error deleting insurance:', error);
    res.status(500).json({ message: 'Internal server error', status: 500 });
  }
});

module.exports = router;