const Insurance  = require('../Models/Insurance');
const cloudinary = require("../config/cloudinary");
const CreateInsurance = async ({ name, file }) => {
  try {
    const image = file ? file.path : null;
    console.log("Creating insurance with:", { name, image });
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "uploads",
    });
    const imageUrl = result.secure_url;
    const newInsurance = await Insurance.create({
      name,
      image: imageUrl,
    });
    return newInsurance;

  } catch (error) {
    console.log("Error creating insurance:", error);
    throw error;
  }
};
const DeleteInsurance = async (id) => {
    try {
        const insuranceToDelete = await Insurance.findByPk(id);
        if (!insuranceToDelete) {
            throw new Error('Insurance not found');
        }
        await insuranceToDelete.destroy();
        return { message: 'Insurance deleted successfully' };
    } catch (error) {
        throw error;
    }
};
const GetInsurances = async () => {
    try {
        const insurances = await Insurance.findAll();
     const formatted = insurances.map((i) => ({
      ...i.toJSON(),
      image: i.image || null,
    }));
        return formatted;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    CreateInsurance,
    DeleteInsurance,
    GetInsurances
};
