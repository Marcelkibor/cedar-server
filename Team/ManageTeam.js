const Team = require('../Models/Team');
const CreateMember = async ({ name, title, description,file }) => {
    try {
        const image = file ? file.path : null;
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
    DeleteMember,
    GetMembers
};