const nSQL = require("@nano-sql/core").nSQL;

const createDatabase = () => {
    nSQL().createDatabase({
        id: "albums-db",
        mode: "TEMP",
        tables: [
            {
                name: "albums",
                model: {
                    "id:int": { pk: true, ai: true },
                    "name:string": { notNull: true },
                    "artist:string": { notNull: true },
                    "rating:float": {}
                }
            }
        ]
    }).then(() => {
        return nSQL("albums").query("upsert", [
            {
                name: "Dark Side of the Moon",
                artist: "Pink Floyd",
                rating: 4.7,
            },
            {
                name: "Back In Chartreuse",
                artist: "AC/DC",
                rating: 4.3,
            }
        ]).exec();
    });
};

module.exports = {
    createDatabase
};
