const Team = require('../Models/Team');
const CreateMember = async (data) => {
    try {
        const fullname = data.fullname;
        const position = data.position;
        const image = data.image;
        const newMember = await Team.create({
            fullname,
            position,
            image
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
const DeleteMember = async (id) => {
    try {
        const member = await Team.findById(id);
        if (!member) {
            throw new Error('Member not found');
        }
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
    DeleteMember
};