const Insurance  = require('../Models/Insurance');
const CreateInsurance = async (data) => {
    try {
        const name = data.name;
        const image = data.image;
        const newInsurance = await Insurance.create({
            name,
            image
        });
        return newInsurance;
    } catch (error) {
        throw error;
    }
};

const DeleteInsurance = async (id) => {
    try {
        const insuranceToDelete = await Insurance.findById(id);
        if (!insuranceToDelete) {
            throw new Error('Insurance not found');
        }
        await Insurance.destroy({
            where: { id }
        });
        return { message: 'Insurance deleted successfully' };
    } catch (error) {
        throw error;
    }
};
const GetInsurances = async () => {
    try {
        const insurances = await Insurance.findAll();
        return insurances;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    CreateInsurance,
    DeleteInsurance,
    GetInsurances
};
