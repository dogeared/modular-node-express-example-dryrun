const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Rock album server is running on port ${port}.`);
});

const databaseService = require('./databaseService');
databaseService.createDatabase();

const albumController = require('./albumController');

app.get('/albums/', albumController.getAllAlbums);
app.get('/albums/:id', albumController.getAlbumById);
app.post('/albums/', albumController.addAlbum);
app.put('/albums/:id', albumController.updateAlbum);
app.delete('/albums/:id', albumController.deleteAlbum);
