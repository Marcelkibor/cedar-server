const service = require('../Models/Service');

const CreateService = async (data) => {
    try {
        const name = data.name;
        const description = data.description;
        const newService = await service.create({
            name,
            description
        });
        console.log('Service created successfully:');
        return newService;
    } catch (error) {
        throw error;
    }
};

const UpdateService = async (id, data) => {
    try {
        const serviceToUpdate = await service.findById(id);
        if (!serviceToUpdate) {
            throw new Error('Service not found');
        }
        const updatedService = await service.update({
            name: data.name,
            description: data.description
        }, {
            where: { id }
        });
        return updatedService;
    } catch (error) {
        throw error;
    }
};
const GetServices = async () => {
    try {
        const services = await service.findAll();
        return services;
    } catch (error) {
        throw error;
    }
};

const DeleteService = async (id) => {
    try {
        const serviceToDelete = await service.findById(id);
        if (!serviceToDelete) {
            throw new Error('Service not found');
        }
        await service.destroy({
            where: { id }
        });
        return { message: 'Service deleted successfully' };
    } catch (error) {
        throw error;
    }
};

module.exports = {
    CreateService,
    UpdateService,
    DeleteService,
    GetServices
};