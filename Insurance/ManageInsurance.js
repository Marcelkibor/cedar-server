const Insurance  = require('../Models/Insurance');
const CreateInsurance = async ({ name, file }) => {
  try {
    const image = file ? file.path : null;

    const newInsurance = await Insurance.create({
      name,
      image,
    });

    return newInsurance;
  } catch (error) {
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
            image: i.image
            ? `http://localhost:5000/${i.image.replace(/\\/g, "/")}`
            : null,
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
