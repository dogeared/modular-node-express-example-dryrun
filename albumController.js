const albumService = require('./albumService');

const getAllAlbums = async (request, response) => {
    const key = request.headers['authorization'];
    
    const result = await albumService.getAllAlbums(key);
    response.status(200).json(result);
};

const getAlbumById = async (request, response) => {
    const id = parseInt(request.params.id);
    const key = request.headers['authorization'];

    const result = await albumService.getAlbumById(key, id);
    response.status(200).json(result);
};

const addAlbum = async (request, response) => {
    const result = await albumService.addAlbum(request.body);
    response.status(200).json(result);
};

const updateAlbum = async (request, response) => {
    const body = {
        ...request.body,
        id: parseInt(request.params.id)
    };
    const result = await albumService.updateAlbum(body);
    response.status(200).json(result);
};

const deleteAlbum = async (request, response) => {
    const id = parseInt(request.params.id);
    const result = await albumService.deleteAlbum(id);
    response.status(200).json(result);
};

module.exports = {
    getAllAlbums,
    getAlbumById,
    addAlbum,
    updateAlbum,
    deleteAlbum
};
