const nSQL = require("@nano-sql/core").nSQL;
const treatmentService = require('./treatmentService');

const getColumns = (key) => {
    let columns = ["id", "name", "artist"];
    const treatment = treatmentService.calculateTreatment(key);

    if (treatment === 'on') {
        columns.push('rating');
    }

    return columns;
}

const getAllAlbums = async (key) => {
    const result = await nSQL("albums").query("select", getColumns(key)).exec();
    return result;
};

const getAlbumById = async (key, id) => {
    const result = await nSQL("albums").query("select", getColumns(key)).where(["id", "=", id]).exec();
    return result;
};

const addAlbum = async (payload) => {
    const result = await nSQL("albums").query("upsert", payload).exec();
    return result;
};

const updateAlbum = async (payload) => {
    const result = await nSQL("albums").query("upsert", payload).exec();
    return result;
};

const deleteAlbum = async (id) => {
    const result = await nSQL("albums").query("delete").where(["id", "=", id]).exec();
    return result;
};

module.exports = {
    getAllAlbums,
    getAlbumById,
    addAlbum,
    updateAlbum,
    deleteAlbum
};