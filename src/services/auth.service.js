const saveRegister = async (data) => {
    const result = await data.save();
    return result;
};
module.exports = {saveRegister}