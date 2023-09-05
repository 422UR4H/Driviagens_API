import { clientDB } from "../database/db.connection.js";

function create(name) {
    return clientDB.query(`
        INSERT INTO cities (name) VALUES ($1);`,
        [name]
    );
}

export const cityRepository = {
    create
};