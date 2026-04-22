const Team = require('../Models/Team');
const CreateMember = async (data) => {
    try {
        const name = data.name;
        const image = data.image;
        const title = data.title;
        const description = data.description;   
        const newMember = await Team.create({
            name,
            image,
            title,
            description
        });
        return newMember;
    } catch (error) {
        throw error;
    }
};
const UpdateMember = async (id, data) => {
    try {
        const member = await Team.findById(id);
        if (!member) {
            throw new Error('Member not found');
        }
        const updatedMember = await Team.update(data, {
            where: { id }
        });
        return updatedMember;
    } catch (error) {
        throw error;
    }
};
const GetMembers = async () => {
    try {
        const members = await Team.findAll();
        return members;
    } catch (error) {
        throw error;
    }
};
const DeleteMember = async (id) => {
    try {
        const member = await Team.findByPk(id);
        if (!member) {
            console.error('Member not found');
            throw new Error('Member not found');
        }
        console.log('Deleting member with id:', id);
        await Team.destroy({
            where: { id }
        });
        return { message: 'Member deleted successfully' };
    } catch (error) {
        throw error;
    }
};
module.exports = {
    CreateMember,
    UpdateMember,
    DeleteMember,
    GetMembers
};