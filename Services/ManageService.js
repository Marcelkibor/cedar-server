const { json } = require('body-parser');
const service = require('../Models/Service');

const CreateService = async (data) => {
    try {
        const name = data.name;
        const description = data.description;
        let res = await service.create({
            name,
            description
        });
        if(res.createdAt){
            return { message: 'Service created successfully', status: 200};
        }
        return { message: 'Failed to create service', status: 500};
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
   const serviceToDelete = await service.findByPk(id);
    if (!serviceToDelete) {
        throw new Error('Service not found');
    }
    await serviceToDelete.destroy();
    return { message: 'Service deleted successfully' };
};

module.exports = {
    CreateService,
    DeleteService,
    GetServices
};