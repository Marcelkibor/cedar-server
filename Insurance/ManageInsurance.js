const Insurance  = require('../Models/Insurance');

const CreateInsurance = async (data) => {
    try {
        const name = data.name;
        const description = data.description;
        const image = data.image;
        const newInsurance = await Insurance.create({
            name,
            description,
            image
        });
        return newInsurance;
    } catch (error) {
        throw error;
    }
};

const UpdateInsurance = async (id, data) => {
    try {
        const insuranceToUpdate = await Insurance.findById(id);
        if (!insuranceToUpdate) {
            throw new Error('Insurance not found');
        }
        const updatedInsurance = await Insurance.update({
            name: data.name,
            description: data.description,
            image: data.image
        } , {
            where: { id }
        });
        return updatedInsurance;
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

module.exports = {
    CreateInsurance,
    UpdateInsurance,
    DeleteInsurance
};
